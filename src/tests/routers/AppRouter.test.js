import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter'

describe('Prubeas en <AppRouter />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }
  
  test('debe de mostrar login si no está autenticado', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar el componetne de marvel si está autenticado', () => {
    
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name:'Paty'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper.find('.navbar').exists() ).toBe( true );

  })
  
  

})
