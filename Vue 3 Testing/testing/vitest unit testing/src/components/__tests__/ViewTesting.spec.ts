import { describe, it, expect } from 'vitest'
import { render,screen } from '@testing-library/vue'
import ViewTesting, { add } from "../ViewTesting.vue";


describe("ViewTesting",()=>
{
  const viewText="Hello from inside a view"

  it("render span correctly",async ()=>
  {
    //setup for the test
    const viewId="viewId";
    render(ViewTesting,{
      props:{element:"span",id:viewId},
      slots:{default:viewText}
    })
    const view= await screen.findByText(viewText);

    expect(view.id).toBe(viewId);
    expect(view.innerHTML).toBe(viewText);
    expect(view.nodeName).toBe("SPAN")
  })

  it("snap shot matches",()=>
  {
    const wrapper= render(ViewTesting,{props:{element:"div"}})
    expect(wrapper).toMatchSnapshot();
  })

});

const vitest = import.meta.vitest;
if (vitest) {
  const { it, expect } = vitest;
  it("add", () => {
    expect(add()).toBe(0);
    expect(add(1)).toBe(1);
    expect(add(1, 2, 3)).toBe(6);
  });
}

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })
