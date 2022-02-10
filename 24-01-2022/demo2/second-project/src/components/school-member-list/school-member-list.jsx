const SchoolMemberList = (props) =>{
    //poru avoir toutes les listes. 

    const membersJSX = props.members.map(
        member => <SchoolMemberListItem key={member.id} {...member} />//remplace le m.firstname il va exploser et tout le mettre. Il va décomposer l'objet. Sinon de bas il aurait fallut faire: 
        //member => <SchoolMemberList key={member.id} firstname={member.firstname}
    );

    return(<>
    <h3>Liste des membres d'une école</h3>
    <section>
        {membersJSX}
    </section>
    </>
    );
};

SchoolMemberList.defaultProps = {
    members:[]
};


/* objet complexe */

const SchoolMemberListItem = (props)=>{
    const {id, firstname, lastname, status} = props;
    
    //Pour afficher juste une personne
    return(
        <article>
            <p>
                {(status!== 'Prof') ? firstname : 'Professeur'}{/* on peut mettre une terner directement dans le cas ou c'est différent de prof. Sinon il ecrit prof */}  {lastname} 
                {/* Le probleme ce serait plutôt les profs.  */}
                <br/>
                La mer est bleue, la terre est verte, ta braguette elle est ouverte.
            </p>
        </article>
    );
};



export default SchoolMemberList;