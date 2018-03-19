import React from "react";
import "./Title.css";

const Title = props => (
	<div className="header">
		<h1 className="title">{props.children}</h1>
		<h4>Click the images, do not repeat. </h4>
		<h4>You have 3 lives.</h4>
		<h3>Wins: {props.wins}</h3>
		<h3>Losses: {props.losses}</h3>
		<h2>{props.message}</h2>
	</div>
);

export default Title;
