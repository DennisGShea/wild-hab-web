import React, { useEffect, useState } from "react";
import { Col, Row, List} from "antd";

const addToFavorites = (id) =>  {
    console.log('button clicked', id)
}

const ListEvents = () => {
  const [eventsList, setEventsList] = useState([]);
  useEffect(() => {
    fetch("https://wildhab-api-a.web.app/events")
      .then((result) => result.json())
      .then((data) => setEventsList(data.data))
      .catch((error) => console.log("error", error));
  }, []);

    // console.log(eventsList);

  return (
    <>
    <Row justify="space-around" >
    <Col>
                    <List
                        dataSource={eventsList}
                        renderItem={event =>
                            <List.Item
                                key={event.id}
                                actions={[<a key="add-to-favorites" onClick={addToFavorites.bind(undefined, event.id)}>add to favorites</a>]}
                            >
                                {event.eventName || event.name}, {event.sport}, Duration: {event.eventDuration}
                            </List.Item>
                        }
                    />
                </Col>
            </Row>
        </>
    )
}

export default ListEvents
