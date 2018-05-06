import Component from 'metal-jsx';
import './style/main.scss';

class App extends Component {
	render() {
		return (
			<div class="app">
				<div><img src="https://i.giphy.com/3o7WIHsSrmSmbfdwIM.gif" /></div>
				<div>Metal JSX <span>Boilerplate</span></div>
				<div>It's working! 🤘</div>
			</div>
		);
	}
}

export { App };
export default App;
