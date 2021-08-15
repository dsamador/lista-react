import React, {useEffect,useState} from 'react'
import {LinkForm} from './LinkForm'
import {db} from '../firebase'
import {toast} from 'react-toastify'

export const Links = () => {

    const [links, setLinks] = useState([])

    const addOrEditLink = async (linkObject)=>{
       await db.collection('links').doc().set(linkObject)
       toast('Nueva tarea creada',{type:'success'})
    }

    const onDeleteLink = async (id) =>{
        if(window.confirm('¿quieres eliminar ese enlace?')){
            await db.collection('links').doc(id).delete()
            toast('Has eliminado una tarea',{type:'error'})
        }else{
            toast('Cuidado con tocar ese botón ombe',{type:'info'})
        }
    }

    const getLinks = ()=>{
        db.collection('links')
        .onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id})
            })
            setLinks(docs)
        })       
    }

    useEffect(()=>{
        getLinks()
    }, [])

    return (
        <div>
            <div className="col-md-4 p-2">
                <LinkForm addOrEditLink={addOrEditLink}/>
            </div>
            <h1>Links</h1>
            <div className="col-md-8 p-2">
                {links.map(link=>(
                    <div className="card mb-1" key={link.id}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4>{link.name}</h4>
                                <i className="material-icons text-danger" onClick={
                                    ()=>onDeleteLink(link.id)}>close</i>
                            </div>
                            <p>{link.description}</p>
                            <p rel="noopener noreferrer">{link.url}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
