/* ======================================================
   MLN111 — Quiz Lý luận nhận thức
   - Random câu hỏi từ ngân hàng
   - Xáo trộn đáp án
   - Chấm điểm + giải thích
   - Hẹn giờ (tùy chọn)
====================================================== */

(function(){
  // --------- Ngân hàng câu hỏi (có giải thích ngắn) ----------
  // type: "single" (1 đáp án đúng)
  // structure: { id, topic, question, choices: [..], answerIndex, explain }
const QUESTION_BANK = [
  {
    id: 'KN-1', topic: 'Khái niệm',
    question: 'Theo chủ nghĩa duy vật biện chứng, nhận thức là gì?',
    choices: [
      'Quá trình phản ánh tích cực, sáng tạo hiện thực khách quan vào tư duy con người',
      'Sự sao chép nguyên xi thế giới bên ngoài',
      'Trải nghiệm cá nhân không cần kiểm chứng',
      'Hệ ký hiệu do chủ thể tự đặt ra'
    ],
    answerIndex: 0,
    explain: 'Nhận thức không thụ động mà là quá trình phản ánh tích cực, sáng tạo hiện thực khách quan.'
  },
  {
    id: 'KN-2', topic: 'Khái niệm',
    question: 'Thành tố nào KHÔNG thuộc cấu trúc hoạt động nhận thức?',
    choices: ['Chủ thể', 'Đối tượng', 'Phương tiện', 'May rủi'],
    answerIndex: 3,
    explain: 'Hoạt động nhận thức gồm: chủ thể, đối tượng, phương tiện và sản phẩm (tri thức).'
  },
  {
    id: 'NG-1', topic: 'Nguồn gốc & bản chất',
    question: 'Nguồn gốc xã hội – lịch sử trực tiếp của nhận thức là gì?',
    choices: [
      'Lao động và giao tiếp xã hội',
      'Bản năng sinh học',
      'Cảm xúc cá nhân',
      'Giải trí tinh thần'
    ],
    answerIndex: 0,
    explain: 'Lao động và giao tiếp xã hội làm nảy sinh nhu cầu và năng lực nhận thức của con người.'
  },
  {
    id: 'NG-2', topic: 'Nguồn gốc & bản chất',
    question: 'Vì sao nói nhận thức mang tính sáng tạo?',
    choices: [
      'Vì chủ thể khái quát và tái cấu trúc hiện thực trong tư duy',
      'Vì tri thức luôn đúng tuyệt đối',
      'Vì không cần dữ liệu cảm tính',
      'Vì tư duy không chịu ảnh hưởng ngôn ngữ'
    ],
    answerIndex: 0,
    explain: 'Chủ thể không phản ánh máy móc mà xử lý, khái quát và mô hình hóa hiện thực.'
  },
  {
    id: 'TP-1', topic: 'Thực tiễn',
    question: 'Vai trò đầy đủ nhất của thực tiễn đối với nhận thức là gì?',
    choices: [
      'Nguồn gốc, động lực, mục đích và tiêu chuẩn của chân lý',
      'Chỉ hỗ trợ cho lý luận',
      'Không liên quan đến đúng – sai',
      'Chỉ có ý nghĩa kinh nghiệm'
    ],
    answerIndex: 0,
    explain: 'Thực tiễn vừa thúc đẩy nhận thức, vừa kiểm nghiệm giá trị của tri thức.'
  },
  {
    id: 'TP-2', topic: 'Thực tiễn',
    question: '“Chân lý mang tính cụ thể” có nghĩa là:',
    choices: [
      'Chỉ đúng trong những điều kiện lịch sử nhất định',
      'Luôn đúng trong mọi hoàn cảnh',
      'Không cần điều kiện kiểm nghiệm',
      'Chỉ dựa vào suy luận logic'
    ],
    answerIndex: 0,
    explain: 'Chân lý phải được xem xét trong điều kiện lịch sử – cụ thể.'
  },
  {
    id: 'CD-1', topic: 'Cấp độ nhận thức',
    question: 'Những hình thức nào thuộc trực quan sinh động?',
    choices: [
      'Cảm giác – tri giác – biểu tượng',
      'Khái niệm – phán đoán – suy lý',
      'Giả thuyết – định luật – học thuyết',
      'Niềm tin – ý chí – cảm xúc'
    ],
    answerIndex: 0,
    explain: 'Trực quan sinh động là cấp độ nhận thức cảm tính.'
  },
  {
    id: 'CD-2', topic: 'Cấp độ nhận thức',
    question: 'Hình thức nào sau đây thuộc tư duy trừu tượng?',
    choices: ['Khái niệm', 'Tri giác', 'Biểu tượng', 'Cảm giác'],
    answerIndex: 0,
    explain: 'Tư duy trừu tượng gồm khái niệm, phán đoán và suy lý.'
  },
  {
    id: 'CD-3', topic: 'Cấp độ nhận thức',
    question: 'Con đường biện chứng của nhận thức là:',
    choices: [
      'Trực quan sinh động → tư duy trừu tượng → trở lại thực tiễn',
      'Tư duy trừu tượng → trực quan sinh động',
      'Chỉ cần cảm tính',
      'Chỉ cần lý tính'
    ],
    answerIndex: 0,
    explain: 'Nhận thức luôn quay trở lại thực tiễn để kiểm nghiệm và phát triển.'
  },
  {
    id: 'SL-1', topic: 'Sai lầm',
    question: 'Kinh nghiệm luận hẹp hòi biểu hiện ở điểm nào?',
    choices: [
      'Tuyệt đối hóa trải nghiệm cá nhân, thiếu khái quát khoa học',
      'Luôn kiểm nghiệm bằng thực tiễn',
      'Tôn trọng bối cảnh lịch sử',
      'Kết hợp lý luận với thực tế'
    ],
    answerIndex: 0,
    explain: 'Kinh nghiệm luận dừng ở cảm tính, coi nhẹ vai trò của lý luận.'
  },
  {
    id: 'SL-2', topic: 'Sai lầm',
    question: 'Giáo điều trong nhận thức là gì?',
    choices: [
      'Sao chép máy móc lý luận, coi tri thức là bất biến',
      'Luôn cập nhật tri thức mới',
      'Kiểm nghiệm rộng rãi trong thực tiễn',
      'Chấp nhận phản biện khoa học'
    ],
    answerIndex: 0,
    explain: 'Giáo điều phủ nhận tính lịch sử – cụ thể và sự phát triển của tri thức.'
  },
  {
    id: 'KN-3', topic: 'Khái niệm',
    question: 'Yếu tố nào giúp lưu giữ và truyền đạt tri thức xã hội?',
    choices: ['Ngôn ngữ', 'Cảm xúc', 'Bản năng', 'Vận động'],
    answerIndex: 0,
    explain: 'Ngôn ngữ là công cụ vật chất của tư duy.'
  },
  {
    id: 'NG-3', topic: 'Nguồn gốc & bản chất',
    question: 'Chân lý vừa tuyệt đối vừa tương đối được hiểu là:',
    choices: [
      'Luôn chứa yếu tố đúng khách quan nhưng có thể được bổ sung, phát triển',
      'Hoàn toàn bất biến',
      'Hoàn toàn phụ thuộc chủ quan',
      'Không thể kiểm chứng'
    ],
    answerIndex: 0,
    explain: 'Tri thức tiệm cận chân lý tuyệt đối thông qua phát triển lịch sử.'
  },
  {
    id: 'TP-3', topic: 'Thực tiễn',
    question: 'Vì sao thực tiễn là tiêu chuẩn của chân lý?',
    choices: [
      'Vì thực tiễn kiểm nghiệm khách quan tính đúng đắn của tri thức',
      'Vì cảm giác luôn sai',
      'Vì lý luận tự nó đã đúng',
      'Vì thực tiễn mang tính chủ quan'
    ],
    answerIndex: 0,
    explain: 'Thực tiễn là thước đo khách quan duy nhất của tri thức.'
  },
  {
    id: 'SL-3', topic: 'Sai lầm',
    question: 'Cách khắc phục chủ quan, duy ý chí là:',
    choices: [
      'Tôn trọng dữ liệu khách quan, chấp nhận kết quả trái kỳ vọng',
      'Chỉ chọn dữ liệu có lợi',
      'Bỏ qua sai số',
      'Tuyệt đối hóa lý thuyết'
    ],
    answerIndex: 0,
    explain: 'Phải kiểm soát thiên lệch nhận thức và dựa trên dữ liệu.'
  }
];


  // --------- Helpers ----------
  const $ = (q, root=document)=> root.querySelector(q);
  const $$ = (q, root=document)=> Array.from(root.querySelectorAll(q));

  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Lấy N câu ngẫu nhiên và xáo trộn phương án
  function makeQuiz(n){
    const pool = shuffle([...QUESTION_BANK]).slice(0, n);
    return pool.map(q=>{
      const options = q.choices.map((text, idx)=>({ text, isCorrect: idx===q.answerIndex }));
      shuffle(options);
      return {
        id: q.id,
        topic: q.topic,
        question: q.question,
        options,
        explain: q.explain
      };
    });
  }

  // Render 1 câu
  function renderQuestion(q, index){
    const name = `q_${index}`;
    const optionsHtml = q.options.map((opt, i)=>`
      <label class="quiz-opt">
        <input type="radio" name="${name}" value="${i}"/>
        <span>${opt.text}</span>
      </label>
    `).join('');
    return `
      <article class="quiz-item" data-qid="${q.id}" data-index="${index}">
        <header class="quiz-q">
          <div class="quiz-number">Câu ${index+1}</div>
          <h3>${q.question}</h3>
          <div class="quiz-topic">Chủ đề: ${q.topic}</div>
        </header>
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-explain" hidden></div>
      </article>
    `;
  }

  // Tô màu đáp án sau khi chấm
  function markQuestion(itemEl, qData, chosenIndex){
    const labels = $$('.quiz-opt', itemEl);
    labels.forEach((lb, i)=>{
      const span = $('span', lb);
      const input = $('input', lb);
      const correct = qData.options[i].isCorrect;
      input.disabled = true;

      if (correct) lb.classList.add('correct');
      if (Number(chosenIndex)===i && !correct) lb.classList.add('wrong');

      // aria
      if (correct) lb.setAttribute('aria-label','Đáp án đúng');
      if (Number(chosenIndex)===i && !correct) lb.setAttribute('aria-label','Bạn chọn (sai)');
    });

    const expEl = $('.quiz-explain', itemEl);
    expEl.hidden = false;
    expEl.textContent = 'Giải thích: ' + qData.explain;
  }

  // ----- State -----
  let QUIZ = [];          // mảng câu hỏi đã xáo
  let timerId = null;     // setInterval
  let remainSec = 0;

  // ----- Elements -----
  const quizContainer = $('#quizContainer');
  const btnNew = $('#btnNew');
  const btnSubmit = $('#btnSubmit');
  const btnReset = $('#btnReset');
  const qCount = $('#qCount');
  const qMinutes = $('#qMinutes');
  const timerEl = $('#timer');
  const statusEl = $('#status');
  const scoreBox = $('#quizResult');
  const scoreText = $('#scoreText');
  const scorePercent = $('#scorePercent');
  const scoreBand = $('#scoreBand');
  const scoreMessage = $('#scoreMessage');

  function renderQuiz(){
    const n = Math.max(5, Math.min(20, Number(qCount.value)||10));
    QUIZ = makeQuiz(n);
    quizContainer.innerHTML = QUIZ.map((q, i)=>renderQuestion(q, i)).join('');
    scoreBox.hidden = true;
    statusEl.textContent = 'Đang làm';
    if (window.gtag) gtag('event','quiz_new',{count:n});
  }

  function startTimer(){
    if (timerId) clearInterval(timerId);
    const m = Math.max(0, Math.min(60, Number(qMinutes.value)||0));
    if (m===0){
      timerEl.textContent = '--:--';
      return;
    }
    remainSec = m*60;
    timerId = setInterval(()=>{
      remainSec--;
      const mm = String(Math.floor(remainSec/60)).padStart(2,'0');
      const ss = String(remainSec%60).padStart(2,'0');
      timerEl.textContent = `${mm}:${ss}`;
      if (remainSec<=0){
        clearInterval(timerId);
        statusEl.textContent = 'Hết giờ — tự động nộp';
        submitQuiz(true);
      }
    }, 1000);
  }

  function submitQuiz(auto=false){
    if (!QUIZ.length) return;
    const items = $$('.quiz-item', quizContainer);
    let correct = 0;

    items.forEach((item, idx)=>{
      const picked = $('input[type="radio"]:checked', item);
      const chosenIndex = picked ? picked.value : '-1';
      // tái dựng qData options mapping đúng index
      const qData = QUIZ[idx];
      const isRight = chosenIndex!=='-1' && qData.options[Number(chosenIndex)].isCorrect;
      if (isRight) correct++;
      markQuestion(item, qData, chosenIndex);
    });

    const total = QUIZ.length;
    const pct = Math.round((correct/total)*100);
    scoreText.textContent = `${correct}/${total}`;
    scorePercent.textContent = `${pct}%`;

    let band=''; let cls='callout';
    if (pct>=90){ band='Xuất sắc'; cls='callout info'; }
    else if (pct>=75){ band='Tốt'; cls='callout info'; }
    else if (pct>=60){ band='Đạt'; cls='callout'; }
    else { band='Cần ôn thêm'; cls='callout warn'; }

    scoreBand.textContent = band;
    scoreMessage.className = cls;
    scoreMessage.textContent = (band==='Cần ôn thêm')
      ? 'Hãy xem lại phần “Vai trò thực tiễn” và “Các cấp độ nhận thức”, chú ý tiêu chuẩn chân lý và con đường biện chứng.'
      : 'Rất tốt! Bạn có thể thử đề khác hoặc tăng số câu để thử thách hơn.';

    scoreBox.hidden = false;
    statusEl.textContent = 'Đã nộp bài' + (auto ? ' (tự động)' : '');
    if (window.gtag) gtag('event','quiz_submit',{score:correct,total});

    // khoá form sau khi nộp
    $$('#quizForm input[type="radio"]').forEach(i=> i.disabled = true);
  }

  function resetQuiz(){
    if (timerId) clearInterval(timerId);
    timerEl.textContent = '--:--';
    statusEl.textContent = 'Chưa bắt đầu';
    quizContainer.innerHTML = '';
    scoreBox.hidden = true;
    if (window.gtag) gtag('event','quiz_reset');
  }

  // ----- Events -----
  btnNew.addEventListener('click', ()=>{
    renderQuiz();
    startTimer();
  });

  btnSubmit.addEventListener('click', ()=> submitQuiz(false));
  btnReset.addEventListener('click', resetQuiz);

  // Tạo đề ngay lần đầu vào trang
  renderQuiz();

})();
