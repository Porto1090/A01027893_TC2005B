/*
Highlight the button and make it play a sound

Eduardo Porto
2024-04-24
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
    private Color originalColor;
    private Image buttonImage;
    private AudioSource audioSource;
    float delay= 0.75f;

    public void Init(int index)
    {
        buttonImage = GetComponent<Image>();
        originalColor = buttonImage.color;
        audioSource = GetComponent<AudioSource>();

        audioSource.clip = Resources.Load<AudioClip>($"Audio/{index}");
    }

    public void Highlight()
    {
        StartCoroutine(ChangeColor());
        audioSource.Play();
    }

    IEnumerator ChangeColor()
    {
        buttonImage.color = Color.white;
        yield return new WaitForSeconds(delay);
        buttonImage.color = originalColor;
    }
}
