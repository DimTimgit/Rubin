import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const ListComponent = ({ name, id, avatar, removeFromList }) => (
    <List selection divided verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button className="remove_list" onClick={removeFromList.bind(this, id)}>
                    Убрать
        </Button>
            </List.Content>
            <Image avatar src={avatar} />
            <List.Content>{name}</List.Content>
        </List.Item>
    </List>
);

const MenuComponent = ({ totalInjury, count, items }) => (
    <div className="container">
        <Menu>
            <Menu.Item className="player_list" name="browse">Список игроков</Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item name="signup">
                    <b>{totalInjury}</b>&nbsp;
            </Menu.Item>

                <Popup
                    trigger={
                        <Menu.Item name="help">
                            Отбор в команду (<b>{count}</b>)
            </Menu.Item>
                    }
                    content={items.map(player => (
                        <ListComponent {...player} />
                    ))}
                    on="click"
                    hideOnScroll
                />
            </Menu.Menu>
        </Menu>
    </div>
);

export default MenuComponent;
