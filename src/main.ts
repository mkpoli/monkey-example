// @ts-ignore isolatedModules

// スタイルを導入
import './style.css';

// コンソールにプリントする
console.log('You are my sunshine');

// 検索ボタンの前後の猿を表示する
const searchButtons = document.querySelectorAll<HTMLButtonElement>('form[role="search"] input[name="btnK"]');
for (const button of Array.from(searchButtons)) {
  button.value = `🐵 ${button.value} 🙈`;
}

// Googleロゴの下に時間を表示する
import { createTimeElement, updateTime } from './time';
const googleLogo = document.querySelector<HTMLImageElement>('img[alt="Google"]');
if (googleLogo) {
  const time = createTimeElement();
  time.style.display = 'block';
  time.style.textAlign = 'center';
  time.style.marginTop = '-0.85rem';
  setInterval(() => updateTime(time), 1000);
  googleLogo.insertAdjacentElement('afterend', time);
}

(() => {
  const app = document.createElement('div');
  document.body.append(app);
  return app;
})().innerHTML = `
<div class="scene">
  <div class="ball"></div>
</div>
<style>
  .scene {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    z-index: 9999;
    pointer-events: none;
  }

  .ball {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    box-shadow: 0 0 10px 0 #f6d365, 0 0 20px 0 #fda085;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    bottom: 0;
    animation: bounce 2s infinite cubic-bezier(0.280, 0.840, 0.420, 1);
  }

  @keyframes bounce {
    0%, 100% {
        transform: translateY(10vh);
    }
    50% {
        transform: translateY(70vh);
    }
  }
</style>
`;

(() => {
  const sakura = document.createElement('div');
  sakura.classList.add('sakura');
  document.body.append(sakura);

  const style = document.createElement('style');
  style.innerHTML = `
    .sakura {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 99999;
      pointer-events: none;
    }

    @keyframes fall {
      0% {
        transform: translateY(0vh);
      }
      100% {
        transform: translateY(100vh);
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(-100deg) rotateX(0deg);
      }
      100% {
        transform: rotate(100deg) rotateX(360deg);
      }
    }
  `;
  document.head.append(style);

  const petal = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="17.5" viewBox="0 0 60 105" fill="none" class="petal"><path d="M34.7787 15.6339L31.8005 1.73564C31.4623 0.157496 29.5133 -0.394533 28.4583 0.826835C11.0216 21.0118 -13.2755 65.2958 10.9968 103.467C11.5493 104.336 12.698 104.626 13.589 104.11C49.4912 83.3179 58.7369 30.2871 59.0283 2.30435C59.0461 0.599669 57.0465 -0.254352 55.7754 0.881589L38.067 16.7061C36.9225 17.7288 35.1003 17.1346 34.7787 15.6339Z" fill="#FEDCFF"/></svg>`;

  for (let i = 0; i < 25; i++) {
    const petalParent = document.createElement('div');
    petalParent.classList.add('petal');
    petalParent.style.animation = `rotate ${Math.random() * 5 + 10}s linear infinite alternate`;
    petalParent.style.animationDelay = `${Math.random() * 5}s`;

    const petalElement = document.createElement('div');
    petalElement.innerHTML = petal;
    petalElement.style.position = 'fixed';
    petalElement.style.top = '-10vh';
    petalElement.style.left = `${Math.random() * 100}vw`;
    petalElement.style.opacity = `${Math.random() * 0.5 + 0.5}`;
    petalElement.style.animation = `fall ${Math.random() * 5 + 10}s linear infinite`;
    petalElement.style.animationDelay = `${Math.random() * 5}s`;

    petalParent.append(petalElement);
    sakura.append(petalParent);
  }
})();
