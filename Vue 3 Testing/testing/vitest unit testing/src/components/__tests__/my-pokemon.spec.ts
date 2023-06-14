import { describe, it, expect } from 'vitest'
import { render,screen,fireEvent } from '@testing-library/vue'
import MyPokemon from "../myPokemon.vue";


describe("my-pokemon",()=>
{
  const viewText="Hello from inside a view"

  it("render span correctly",async ()=>
  {
    //setup for the test

    render(MyPokemon)
    //getting the button
    const pokemon= await screen.findByText("Get Pokemon");
    await fireEvent.click(pokemon);
    const value=await screen.findByText("bulbasaur");

    //assert

    expect(value.innerHTML).toBe("bulbasaur");
  })


});

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })
