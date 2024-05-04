/*
Eduardo Porto Morales

1920/1080
16/9
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PaddleMotion : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField]  Vector2 direction;
    [SerializeField]  KeyCode positiveKey;
    [SerializeField]  KeyCode negativeKey;
    [SerializeField] int limit;

    void Update()
    {
        if((Input.GetKey(positiveKey)) && transform.position.y < limit){
            transform.Translate(direction*speed*Time.deltaTime);
        } else if((Input.GetKey(negativeKey)) && transform.position.y>-limit){
            transform.Translate(-direction*speed*Time.deltaTime);
        }
    }
}
