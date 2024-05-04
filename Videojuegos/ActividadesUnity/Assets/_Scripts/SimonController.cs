/*
Simon Control gaming logic

Eduardo Porto
2024-04-24
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class SimonController : MonoBehaviour
{
    [SerializeField] private GameObject gameOver;
    [SerializeField] private GameObject startGame;
    [SerializeField] List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] bool playerTurn = false;
    [SerializeField] GameObject prefab;
    [SerializeField] Button resetButton;
    [SerializeField] GameObject buttonHolder;
    [SerializeField] TMP_Text levelManager;
    [SerializeField] TMP_Text textManager;
    [SerializeField] TMP_Text highScoreManager;
    [SerializeField] TMP_Text buttonQManager;
    float delay = 1f;
    int counter = 0;
    int level, highScore = 0;
   int numButtons= 4;
    bool gameOverCondition= false;

    void Start()
    {
        buttonQManager.text = numButtons.ToString();
    }

    void Update()
    {
        if(level>highScore && gameOverCondition== true)
        {
            highScore = level;
            highScoreManager.text = "HIGHSCORE:  " + highScore.ToString();
        }
    }
    public void Init()
    {
        gameOverCondition= false;
        highScoreManager.text = "HIGHSCORE:  " + highScore.ToString();
        if (buttons != null && buttons.Count > 0)
        {
            foreach (SimonButton button in buttons)
            {
                Destroy(button.gameObject);
            }
        }
        sequence.Clear();

        gameOver.SetActive(false);
        counter = 0;
        level= 0;
        playerTurn = false;

        levelManager.text = level.ToString();
        textManager.text = "Memorize the sequence!";
        PrepareButtons();
        StartCoroutine(PlaySequence());
    }


    void AddToSequence()
    {
        resetButton.interactable = false;
        textManager.text= "Memorize the sequence!";
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence()
    {
        yield return new WaitForSeconds(delay);

        foreach (int index in sequence)
        {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        resetButton.interactable = true;
        playerTurn = true;
        textManager.text= "It's your turn!";
    }

void PrepareButtons()
{
    buttons.Clear();
    for (int i = 0; i < numButtons; i++)
    {
        GameObject newButton = Instantiate(prefab, buttonHolder.transform);
        SimonButton simonButton = newButton.GetComponent<SimonButton>();
        if (simonButton != null)
        {
            int index = i;
            newButton.GetComponent<Image>().color = Color.HSVToRGB((float)i / numButtons, 1f, 1f);
            newButton.GetComponent<SimonButton>().Init(index);
            simonButton.gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
            buttons.Add(simonButton);
        }
    }
    AddToSequence();
}

    void ButtonPressed(int index)
    {
        if (playerTurn)
        {
            if (index == sequence[counter])
            {
                counter++;
                if (counter >= sequence.Count)
                {
                    playerTurn = false;
                    level++;
                    AddToSequence();
                    counter = 0;
                    levelManager.text= level.ToString();
                }
            }
            else
            {
                gameOverCondition= true;
                textManager.text= "Maybe next time!!";
                gameOver.SetActive(true);
                playerTurn = false;
            }
        }
    }
    public void ButtonQuantity(int norm)
    {
        int newNumButtons = numButtons + norm;

        if (newNumButtons >= 2 && newNumButtons <= 6)
        {
            numButtons = newNumButtons;
            buttonQManager.text = numButtons.ToString();
        }
    }

    public void StartGame()
    {
        Destroy(startGame);
        Init();
    }
}
