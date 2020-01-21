import React from "react";
import AddRecipeForm from "./AddRecipeForm";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`AddRecipeForm component`, () => {
    const stubFolders = [
        {
            id: "1",
            name: "Breakfast"
        },
        {
            id: "2",
            name: "Lunch"
        },
        {
            id: "3",
            name: "Dinner"
        }
    ];

    it("renders the complete form", () => {
        const wrapper = shallow(<AddRecipeForm />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip("renders the select options from folders", () => {
        const context = { folders: stubFolders };
        const select = shallow(<AddRecipeForm />, context).find("#recipe-folder-select");
        expect(toJson(select)).toMatchSnapshot();
    });
});
