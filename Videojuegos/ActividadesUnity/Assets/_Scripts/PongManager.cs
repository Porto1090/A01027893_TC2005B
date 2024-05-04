/*
Game Manager for the Pong demo
Eduardo Porto Morales
10/04/2024
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PongManager : MonoBehaviour
{
    [SerializeField] private GameObject pong;
    [SerializeField] private GameObject pongPrefab;
    [SerializeField] private float speed;
    public int pointsLeft;
    public int pointsRight;
    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;
    void Start()
    {
        InitGame();
        scoreLeft.text= "0";
        scoreRight.text= "0";
    }

    void Update()
    {
        if(Input.GetKeyDown(KeyCode.R))
        {
            ResetGame();
        }
    }

    public void ResetGame()
    {
        if(pong != null)
        {
            Destroy(pong);
            InitGame();
        }
    }

    public void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f);
        pong= Instantiate(pongPrefab);
        pong.GetComponent<Rigidbody2D>().velocity= Random.insideUnitCircle.normalized *speed;
    }

    public void Score(string side)
    {
        if (side=="left")
        {
            pointsLeft++;
            scoreLeft.text= pointsLeft.ToString();
        }
        else if (side=="right")
        {
            pointsRight++;
            scoreRight.text= pointsRight.ToString();
        }
    }
}
