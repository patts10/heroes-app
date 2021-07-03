
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashoardRoutes } from '../../routers/DashoardRoutes';

describe('Pruebas en <DashboardRoutes />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name:'pepito'
    }
  };

  test('debe mostrarse correctamente', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <DashoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim() ).toBe('pepito');


  })
  
  
})
