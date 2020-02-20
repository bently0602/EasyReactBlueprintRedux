class HelloMessage extends React.Component {
	render() {
		return (
			<h1>{this.props.name}</h1>
		);
	}
}

ReactDOM.render(
	<HelloMessage name="Hello to you" />,
	document.getElementById('root')
);


class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}

	tick() {
		this.setState(state => ({
			seconds: state.seconds + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
			Seconds: {this.state.seconds}
			</div>
		);
	}
}

ReactDOM.render(
	<Timer />,
	document.getElementById('timer-example')
);


class ButtonExample extends React.Component {
	render() {
		return (
			<div>
				<Blueprint.Core.Button icon="cloud" text="CDN Blueprint is go!" />
			</div>
		);
	}
}
ReactDOM.render(<ButtonExample />, document.querySelector("#btn"));
