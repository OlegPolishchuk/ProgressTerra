import './App.css';

import { FireIcon, InformationButtonIcon } from 'components';

function App() {
  return (
    <div className="App">
      <header className={'header'}>
        <div className={'container header_title'}>
          <h1 className={'logo text_body'}>ЛОГОТИП</h1>
          <InformationButtonIcon className={'icon_info'} />
        </div>

        <div className={'bonus'}>
          <div className={'bonus_description'}>
            <h2 className={'bonus_title text_headline'}>300 бонусов</h2>
            <div className={'bonus_info'}>
              <p>
                29.03 сгорит
                <span>
                  <FireIcon className={'bonus_icon_fire'} />
                </span>
                250 бонусов
              </p>
            </div>
          </div>

          <button className={'button_next'} />
        </div>
      </header>
    </div>
  );
}

export default App;
