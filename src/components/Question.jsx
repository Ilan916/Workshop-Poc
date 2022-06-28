import React from 'react'

function Question() {
  return (
    <div className='mt-5'>   
        <p> <strong>Contexte :</strong> Vous avez envie d'essayer de nouvelles choses et décider de commencer l'investissement dans les cryptomonnaies.</p>
        <p> <strong>Question :</strong> Celon vous, cet investissement à ce moment précis du cours de L'ethereum est-il judicieux ?</p>
        <p>Décidez vous d'investir ou de passer ?</p>

        <div className='mt-3 d-flex'>
            <button type="button" class="btn btn-danger">Passer</button>
            <button type="button" class="btn btn-primary ml-2" >Investir</button>
        </div>
    </div>
  )
}

export default Question