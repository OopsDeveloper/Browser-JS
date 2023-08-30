'use strict';

// export default는 바깥으로 노출시키는 것
// script에 type을 module 라고 지정해줘야된다.
export default class PopUp {
  // 필요한 것들 초기화
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpMessage = document.querySelector('.pop-up__message');
    this.popUpRefreshBtn = document.querySelector('.pop-up__refresh');

    this.popUpRefreshBtn.addEventListener('click', () => {
      this._hide();
      this.onClick && this.onClick(); // onClick이라는 맴버 변수가 있다면 호출
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpMessage.innerText = text;
    this.popUp.classList.remove('hide');
  }

  _hide() {
    this.popUp.classList.add('hide');
  }
}
