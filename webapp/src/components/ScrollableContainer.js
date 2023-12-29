import React from 'react';
import classes from "./ScrollableContainer.module.css";
function ScrollableContainer(props) {
  return (
    <div className={classes.ScrollableContainer}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>DOB</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {props.jsonData.map((item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScrollableContainer;