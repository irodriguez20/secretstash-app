import React from "react";
import SecetStashForm from "./SecretStashForm";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

describe(`SecretStashForm component`, () => {
    const props = {
        className: "test-class-name",
        children: <p>test children</p>,
        "data-other": "test-other-prop"
    };

    it("renders a form.SecretStashForm by default", () => {
        const wrapper = shallow(<SecetStashForm />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders the SecretStashForm given props", () => {
        const wrapper = shallow(<SecetStashForm {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
