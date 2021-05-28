import React, { createRef } from 'react';

import * as TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
    const checkboxLabelRef = createRef();
    const checkboxInputRef = createRef();

    // render checkbox w/ label in doc
    TestUtils.renderIntoDocument(
        <CheckboxWithLabel
            labelRef={checkboxLabelRef}
            inputRef={checkboxInputRef}
            labelOn="On"
            labelOff="Off"
        />
    );

    const labelNode = checkboxLabelRef.current;
    const inputNode = checkboxInputRef.current;

    // verify that it's off by default
    expect(labelNode.textContent).toEqual('Off');

    // simulate click
    TestUtils.Simulate.change(inputNode);
    expect(labelNode.textContent).toEqual('On');
});
