import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One punch'


    test('Debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GiftGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mmostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 1,
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Test'
            },
            {
                id: 2,
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Test'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GiftGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    

})