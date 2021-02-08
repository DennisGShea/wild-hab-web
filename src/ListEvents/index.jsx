import React, {useEffect} from 'react'

const ListEvents = ()  => { 

    // api call
    useEffect(() => {
        fetch("https://wildhab-api-a.web.app/events")
        .then(result => result.json())
        .then(data =>  console.log(data))
        .catch(error => console.log('error', error))
}, [])

return (
   <div>Hello Lists Events</div>
    )
}

export default ListEvents 