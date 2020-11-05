import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../progressbar.css';

const PlayerList = player => {
    const { name, avatar, position, injury, number, addToList, addedCount, openForm, predictForm, progressbar } = player;

    return (
        <Card>
            <div className="card-image">
                <Image src={avatar} />
                <div className="container-progressbar">
                    <CircularProgressbar value={progressbar} text={`${progressbar}%`} />
                </div>
            </div>
            <div>
                <Card.Content>
                    <Card.Header className="player_name">{name}</Card.Header>
                    <div>
                        <Card.Header className="number">number:&nbsp;{number}</Card.Header>
                    </div>
                    <Card.Meta>
                        <span className="date">position:&nbsp;{position}</span>
                    </Card.Meta>
                    <Card.Content extra>
                        <a className="injury">
                            Травмы:&nbsp;
                    {injury}
                        </a>
                    </Card.Content>
                    <div className="of">
                        <Button className="open_form" onClick={openForm}>
                            Текущая форма
                        </Button>
                    </div>
                    <div className="of">
                        <Button className="predict_form" onClick={predictForm}>
                            Прогнозная форма
                </Button>
                    </div >
                    <div className="of">
                        <Button className="select_form" onClick={addToList.bind(this, player)}>
                            Добавить в отбор {addedCount > 0 && `(${addedCount})`}
                        </Button>
                    </div>
                </Card.Content>
            </div>



        </Card >
    );
};

export default PlayerList;
