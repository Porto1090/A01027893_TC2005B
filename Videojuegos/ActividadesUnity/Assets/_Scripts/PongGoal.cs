using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongGoal : MonoBehaviour
{
    [SerializeField] private string side;
    PongManager manager;
    void Start()
    {
        manager= GameObject.FindWithTag("GameController").GetComponent<PongManager>();
    }

    void OnCollisionEnter2D(Collision2D other)
    {
        manager.Score(side);
        Destroy(other.gameObject);
        manager.InitGame();
    }
}
