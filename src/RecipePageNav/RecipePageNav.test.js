import React from "react";
import RecipePageNav from "./RecipePageNav";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`RecipePageNav component`, () => {
    it("renders a .RecipePageNav by default", () => {
        const wrapper = shallow(<RecipePageNav />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // enzyme doesn't support React.createContext
    it.skip("renders a h2 with folder name when in props", () => {
        const props = {
            match: {
                params: {
                    recipeId: "test-recipe-id"
                }
            }
        };
        const context = {
            recipes: [{ id: "test-recipe-id", folderid: "test-folder-id" }],
            folders: [{ id: "test-folder-id", name: "Important" }]
        };

        const h2 = shallow(<RecipePageNav {...props} />, context).find(
            ".RecipePageNav__folder-name"
        );
        expect(toJson(h2)).toMatchSnapshot();
    });
});
