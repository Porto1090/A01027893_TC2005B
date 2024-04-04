using UnityEngine;

/*
En resumen, el script detecta cuando se hace clic en un objeto (detectando el clic del mouse),
almacena la referencia a ese objeto y luego actualiza continuamente su posicion 
mientras se mantiene presionado el boton del mouse, permitiendo que el usuario lo "arraje"
por la pantalla. Una vez que el boton del mouse se suelta, 
deja de actualizar la posicion del objeto.

La funcion mas importante:  ScreenPointToRay() es un metodo de la clase Camera en Unity. 
Toma una posicion en la pantalla (en coordenadas de pixeles) y devuelve un rayo 
que se extiende desde la camara hacia la posicion especificada en el mundo del juego. 
Este rayo se utiliza comunmente para realizar interacciones basadas 
en el puntero del mouse en la escena.
*/
public class DragDrop : MonoBehaviour
{
    RaycastHit2D hit;
    Camera coords;
    Vector3 mousePos;
    Transform focus;
    bool isDrag;

    private void Start()
    {
        isDrag = false;
        coords = Camera.main;
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            hit = Physics2D.GetRayIntersection(coords.ScreenPointToRay(Input.mousePosition));
            if (hit.collider != null)
            {
                focus = hit.transform;
                Debug.Log("tap = " + hit.collider.transform.name);
                isDrag = true;
            }
        }
        else if (Input.GetMouseButtonUp(0) && isDrag == true)
        {
            isDrag = false;
        }
        else if (isDrag == true)
        {
            mousePos = Input.mousePosition;
            mousePos.z = -coords.transform.position.z;
            Vector3 pos = coords.ScreenToWorldPoint(mousePos);

            focus.position = new Vector3(pos.x, pos.y, focus.position.z);
        }
    }
}
