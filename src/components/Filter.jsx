import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
    <Menu secondary>
        <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}>
            Все
    </Menu.Item>
        <Menu.Item
            active={filterBy === 'injury_high'}
            onClick={setFilter.bind(this, 'injury_high')}>
            Травмы max
    </Menu.Item>
        <Menu.Item
            active={filterBy === 'injury_low'}
            onClick={setFilter.bind(this, 'injury_low')}>
            Травмы min
    </Menu.Item>
        <Menu.Item
            active={filterBy === 'name'}
            onClick={setFilter.bind(this, 'name')}>
            Игрок
    </Menu.Item>
        <Menu.Item>
            <Input
                icon="search"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Поиск по имени..." className="name_search"
            />
        </Menu.Item>
    </Menu>
);

export default Filter;
