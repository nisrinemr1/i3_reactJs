
/**
 *  CREACTION D'UN HOOK PERSONALISé POUR GERER LES MESSAGES
 * -stocker les messages
 * -ajouter les messages 
 * -supprimer un message 
 * -supprimer tous les messages
 */

import { nanoid } from "nanoid";
import { useState } from "react";

export const useMessage = () =>{

    //Définir un state avec le tableau des messages.
    const [messages, setMessage] = useState([]);

    /**
     * permet d'ajouter un message
     * @param {string} message un nouveau message
     */
    const addMessage = (message) =>{
        const newMessage = {
            //Création d'un objet message avec un id
            id: nanoid(),
            msg: message
        };
        //ajout du message dans le state
        setMessage(m => [...m, newMessage]);
    };

    //delete le message depuis l'id besoin du filter
    /**
     * Permet de supprimer un message
     * @param {string} id l'identifiant du message. 
     */
    const deleteMessag = (id) =>{
        setMessage(m=>m.filter(msg => msg.id !== id));
        // recupere uniquement ceux qui ne me pose pas de problème. Prendre tous sauf ceux qui ont l'id qu'on recherche
    }

    /**
     * permet de supprimer tous les messages.
     */
    const deleteAllMessage = () =>{ 
        setMessage([]);
    }

    //revoyer les elements qu'on veut rendre accessible. Donc si on veut que certains elements ne soient pas accessibles, on aura juste à retirer 
    return[
        messages,
        addMessage,
        deleteMessag,
        deleteAllMessage
    ];
};