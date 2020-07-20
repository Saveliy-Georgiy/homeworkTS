import React, {useState} from 'react';
import {MyInput} from "./renderCommonComponents/MyInput/MyInput";
import { MyButton } from './renderCommonComponents/MyButton/MyButton';
import {MyCheckbox} from "./renderCommonComponents/MyCheckbox/MyCheckbox";
import styles from "./renderCommonComponents/MyCheckbox/MyCheckbox.module.css";

const CommonComponents = () => {

  return (
    <div>
        <MyInput
            placeholder="qwerty"
            value="some message"
            error="error"
            onEnter={() => {}}
            onChange={(e) => {}}
        />
        <MyCheckbox
            checked={false}
            onChange={(e) => {}}
        />
        <MyButton onClick={() => {}} name="some button"/>
    </div>
  );
}

export default CommonComponents;
