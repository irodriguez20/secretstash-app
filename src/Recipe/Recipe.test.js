import React from "react";
import Recipe from "./Recipe";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`Recipe component `, () => {
    const props = {
        id: "a",
        name: "test-class-name",
        timetomake: "test-time-to-make",
        description: "test description",
        ingredients: "test ingredients",
        steps: "test steps",
    };

    it("renders a .Recipe by default", () => {
        const wrapper = shallow(<Recipe />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders the Recipe given props", () => {
        const wrapper = shallow(<Recipe {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
