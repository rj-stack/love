const febHolidays = [
    "Kashishhh, ik tri mate bov overwhelming che",
    "Tne lage che mri life bov filmy che pan aa badhu tra lidhe j filmy lagi rahyu che",
    "Aa badhu joine evu load na leti kashish",
    "Im just expressing mro prem for u and not expecting for any ans or such tra thi",
    "Ik tri battery low che e apde shanti thi charge krsu bhale ketlo bi time lage",
    "Just see k right person hse to e tra mate ketlu krse",
    "And ena mate e bi ochu j hse",
    "Tne lage che m bov kru chu pan aa ksu j nai kashish",
    "And mne em thay k tra mate nai to kona mate kris",
    "Aa je feel thay che mne e pela nai thyu kyarey",
    "To hu je bhi efforts kru chu e mra mate kru chu ema tu load km lais kashish",
    "aa lakhva mate vadhare time nto etla ftft lakhyu che❤",
    "Kashishhhhhhhh, tu bov sari che and bov game che mne",
    "tra lidhe sad nai thau m tu mne chella 1.5m thi khush rakhe che",
    "bhale tne lagtu hse tra lidhe loko sad thay tu sad kre pan",
    "tra existense na lidhej me khush thai jau chu kashishhh",
    "Im grateful that u came into my life",
    "And aa kyare pan change nai thay",
    "Im not a text person to je man ma aaave che lakhu chu ha",
    "Ekj vastu yaad rakhje k ksu bhi hoy im there always",
    "Koi bi vastu hoy that u wanna share tu kri sakse",
    "I want to be a safe space jene tu badhu kai sake kashish",
    "Ik tri life ma bov problems avya che ghana loko na lidhe",
    "And tro ek pov bani gyo che",
    "pan trust me aa badha povs change kri ne rais m",
    "bhale je pan time lage m kris e",
    "Kashishhhhhhhhhhh tu bov pyari che bakudiiii",
    "All the very best kal mateee",
    "I like you very much kashish❤️ "
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  