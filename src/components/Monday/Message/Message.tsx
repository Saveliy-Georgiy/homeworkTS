import React from 'react';
import styles from './Message.module.css'
import avatar1 from "../../../images/avatar1.jpg"

type PropsType = {
    name: string
    timeAdded: any
}

function Message(props: PropsType) {
  return (
      <div className={styles.message}>
          <img src={avatar1} alt="avatar"/>
          <div className={styles.commentBubble}>
              <div className={styles.userName}>{props.name}</div>
              <div className={styles.helloVisitor}>
                  some message
              </div>
              <div className={styles.time}>{props.timeAdded}</div>
          </div>
      </div>
  );
}

export default Message;



/*
- создать компоненту, которая красиво будет выводить ваше ФИО (попрактикуйте пропсы!!! (<Message name="x" text="y"/>), их типизацию и module.css)
- *** создать компоненту, которая будет выводить текст,  стилизованно как в телеграмме (имя, текст, время, уголок (загуглить/украсть с другого сайта/у друга))
- нужно типизировать пропсы сразу, any - крайне нежелателен даже вначале, если не знаете как - пишем мне или на хэлп*/
