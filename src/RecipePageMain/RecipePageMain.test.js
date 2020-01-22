import React from "react";
import RecipePageMain from "./RecipePageMain";
import { shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";

describe(`RecipePageMain component`, () => {
    it("renders a .RecipePageMain by default", () => {
        const wrapper = shallow(<RecipePageMain />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it.skip("renders a Recipe with recipe prop", () => {
        const props = {
            match: {
                params: {
                    recipeId: 4
                }
            }
        };
        const context = {
            recipes: [
                {
                    id: 4,
                    name: "Salsa",
                    // folderid: 2,
                    timetomake: "15min",
                    description: 'A twist on my mother-in-laws homemade salsa. This salsa is delicous and so quick and easy to whip up. Youll never be satisfied with store-bought again. Youll even start critiquing the restaurants.',
                    ingredients: '2 Jalapeños, 2 Seranos, 4 Roma Tomatoes, 1/2 Yellow Onion, Salt to taste, 2 Crushed garlic cloves, 1 bunch of Cilantro',
                    steps: '1. Place the tomatoes and peppers in a pot of water. Let it get to a low boil. Once the skin has split on the tomatoes and the peppers color has faded slightly take the pot off the burner. 2. Spoon out the tomatoes and place them in the blender. Spoon out the peppers and cut the stems off. If you dont want all the seeds, slice the pepper in half and scoop out the seeds. Then place the peppers into the blender. 3. Chop the yellow onion and add it to the blender. 4. Blend until the salsa is smooth and everything is combined. 5. Add salt, blend and taste the salsa. If needed add a bit more salt. 6. Chop a handful of cilantro (taking care not to include stems). Add the cilantro to the blender and pulse until just combined. 7. Pour into a serving dish or tupperware and serve!'
                },
            ]
        };
        const recipe = shallow(<RecipePageMain {...props} />, context).find("Recipe");
        expect(toJson(recipe)).toMatchSnapshot();
    });
});
