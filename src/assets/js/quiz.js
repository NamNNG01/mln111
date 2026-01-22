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
      question: 'Theo duy vật biện chứng, “nhận thức” là gì?',
      choices: [
        'Quá trình phản ánh hiện thực khách quan một cách tích cực, sáng tạo để tạo ra tri thức.',
        'Sự sao chép cơ học thế giới bên ngoài vào bộ óc con người.',
        'Trải nghiệm cá nhân thuần tuý không cần kiểm chứng.',
        'Mọi hệ thống ký hiệu bất kỳ do chủ thể đặt ra.'
      ],
      answerIndex: 0,
      explain: 'Nhận thức là phản ánh tích cực, sáng tạo hiện thực khách quan nhằm tạo tri thức chỉ đạo thực tiễn.'
    },
    {
      id: 'KN-2', topic: 'Khái niệm',
      question: 'Thành tố nào KHÔNG thuộc “cấu trúc hoạt động nhận thức”?',
      choices: ['Chủ thể', 'Đối tượng', 'Phương tiện', 'Vận may'],
      answerIndex: 3,
      explain: 'Cấu trúc gồm: chủ thể – đối tượng – phương tiện – sản phẩm (tri thức). “Vận may” không phải thành tố khoa học.'
    },
    {
      id: 'NG-1', topic: 'Nguồn gốc & bản chất',
      question: 'Yếu tố nào là nguồn gốc xã hội–lịch sử trực tiếp thúc đẩy sự hình thành và phát triển nhận thức?',
      choices: ['Lao động và giao tiếp xã hội', 'Bản năng sinh học thuần tuý', 'Giải trí tinh thần', 'Tâm trạng cá nhân'],
      answerIndex: 0,
      explain: 'Lao động và giao tiếp xã hội làm nảy sinh nhu cầu và khả năng nhận thức cao của con người.'
    },
    {
      id: 'NG-2', topic: 'Nguồn gốc & bản chất',
      question: 'Vì sao nói nhận thức là phản ánh sáng tạo?',
      choices: [
        'Vì chủ thể lựa chọn, khái quát, mô hình hoá bản chất của sự vật.',
        'Vì tri thức luôn đúng tuyệt đối và bất biến.',
        'Vì nhận thức không cần dữ liệu cảm tính.',
        'Vì ngôn ngữ không tác động đến tư duy.'
      ],
      answerIndex: 0,
      explain: 'Chủ thể tái cấu trúc hiện thực trong tư duy trên cơ sở dữ kiện và phương pháp.'
    },
    {
      id: 'TP-1', topic: 'Thực tiễn',
      question: 'Phát biểu nào đúng về vai trò của thực tiễn đối với nhận thức?',
      choices: [
        'Thực tiễn là nguồn gốc, mục đích, động lực của nhận thức và là tiêu chuẩn chân lý.',
        'Thực tiễn chỉ là bước phụ trợ cho lý luận.',
        'Thực tiễn không liên quan đến giá trị đúng sai của tri thức.',
        'Chỉ cần suy luận thuần lý là đủ xác lập chân lý.'
      ],
      answerIndex: 0,
      explain: 'Thực tiễn vừa đặt vấn đề, thúc đẩy nhận thức, vừa kiểm nghiệm giá trị của tri thức.'
    },
    {
      id: 'TP-2', topic: 'Thực tiễn',
      question: '“Chân lý là cụ thể” hàm ý điều gì trong kiểm nghiệm?',
      choices: [
        'Phải xét điều kiện lịch sử–cụ thể khi đánh giá tri thức.',
        'Chân lý luôn bất biến trong mọi hoàn cảnh.',
        'Không cần quan tâm bối cảnh kiểm nghiệm.',
        'Chỉ cần một ví dụ là đủ kết luận.'
      ],
      answerIndex: 0,
      explain: 'Kiểm nghiệm cần gắn với điều kiện cụ thể; mở rộng phạm vi làm tăng độ tin cậy nhưng vẫn phải cập nhật.'
    },
    {
      id: 'CD-1', topic: 'Cấp độ nhận thức',
      question: '“Trực quan sinh động” gồm các hình thức nào?',
      choices: [
        'Cảm giác, tri giác, biểu tượng',
        'Khái niệm, phán đoán, suy lý',
        'Giả thuyết, định lý, hệ quả',
        'Niềm tin, ý chí, cảm xúc'
      ],
      answerIndex: 0,
      explain: 'Trực quan sinh động phản ánh cảm tính: cảm giác–tri giác–biểu tượng.'
    },
    {
      id: 'CD-2', topic: 'Cấp độ nhận thức',
      question: 'Hình thức nào thuộc “tư duy trừu tượng”?',
      choices: ['Khái niệm', 'Tri giác', 'Biểu tượng', 'Cảm giác'],
      answerIndex: 0,
      explain: 'Tư duy trừu tượng gồm: khái niệm, phán đoán, suy lý.'
    },
    {
      id: 'CD-3', topic: 'Cấp độ nhận thức',
      question: 'Con đường biện chứng của nhận thức theo LLNT là:',
      choices: [
        'Từ trực quan sinh động → tư duy trừu tượng → trở lại thực tiễn',
        'Từ tư duy trừu tượng → trực quan → dừng lại',
        'Chỉ cần trực quan là đủ',
        'Chỉ cần tư duy trừu tượng là đủ'
      ],
      answerIndex: 0,
      explain: 'Chu trình: cảm tính → lý tính → trở lại thực tiễn để kiểm chứng và phát triển.'
    },
    {
      id: 'SL-1', topic: 'Sai lầm',
      question: 'Biểu hiện nào sau đây thuộc “kinh nghiệm luận hẹp hòi”?',
      choices: [
        'Tuyệt đối hoá trải nghiệm cá nhân, thiếu khái quát khoa học',
        'Đối chiếu thực tiễn, mở rộng điều kiện kiểm nghiệm',
        'Đề cao phương pháp luận và dữ liệu',
        'Tôn trọng bối cảnh lịch sử–cụ thể'
      ],
      answerIndex: 0,
      explain: 'Kinh nghiệm luận dừng ở cảm tính, không nâng lên lý luận và kiểm chứng rộng.'
    },
    {
      id: 'SL-2', topic: 'Sai lầm',
      question: 'Giáo điều là gì trong nhận thức?',
      choices: [
        'Sao chép máy móc kết luận sẵn có, coi lý thuyết bất biến',
        'Luôn kiểm nghiệm bằng thực tiễn',
        'Cập nhật mô hình theo dữ kiện mới',
        'Mở rộng phạm vi điều kiện kiểm tra'
      ],
      answerIndex: 0,
      explain: 'Giáo điều phủ nhận tính lịch sử–cụ thể và tính phát triển của tri thức.'
    },
    {
      id: 'KN-3', topic: 'Khái niệm',
      question: 'Yếu tố nào giúp “vật chất hoá tư duy”, cho phép tích luỹ tri thức qua nhiều thế hệ?',
      choices: ['Ngôn ngữ', 'Cảm xúc', 'Bản năng', 'Vận động thể chất'],
      answerIndex: 0,
      explain: 'Ngôn ngữ là công cụ vật chất của tư duy, truyền đạt và tích luỹ tri thức xã hội.'
    },
    {
      id: 'NG-3', topic: 'Nguồn gốc & bản chất',
      question: 'Tính “tương đối – tuyệt đối thống nhất” của chân lý hiểu thế nào?',
      choices: [
        'Tri thức luôn chứa phần đúng khách quan, nhưng mở cho bổ sung, hoàn thiện',
        'Chân lý hoàn toàn tuyệt đối, bất biến',
        'Chân lý hoàn toàn tương đối, tuỳ ý chủ quan',
        'Không thể kiểm chứng bằng thực tiễn'
      ],
      answerIndex: 0,
      explain: 'Tri thức tiệm cận chân lý tuyệt đối thông qua phát triển lịch sử và kiểm nghiệm thực tiễn.'
    },
    {
      id: 'TP-3', topic: 'Thực tiễn',
      question: 'Vì sao “thực tiễn là tiêu chuẩn chân lý”?',
      choices: [
        'Vì thực tiễn kiểm nghiệm khách quan tính đúng đắn của tri thức',
        'Vì cảm giác luôn sai',
        'Vì lý thuyết tự đúng không cần thử nghiệm',
        'Vì thực tiễn chỉ là trải nghiệm chủ quan'
      ],
      answerIndex: 0,
      explain: 'Thực tiễn là hoạt động vật chất có mục đích, là thước đo khách quan của tri thức.'
    },
    {
      id: 'CD-4', topic: 'Cấp độ nhận thức',
      question: 'Cặp nào là tương ứng đúng giữa cấp độ và hình thức?',
      choices: [
        'Trực quan sinh động – cảm giác/tri giác/biểu tượng',
        'Tư duy trừu tượng – cảm giác/tri giác/biểu tượng',
        'Trực quan sinh động – khái niệm/phán đoán/suy lý',
        'Tư duy trừu tượng – màu sắc/âm thanh/nhiệt'
      ],
      answerIndex: 0,
      explain: 'Trực quan sinh động gắn với phản ánh cảm tính; tư duy trừu tượng gắn với hình thức logic.'
    },
    {
      id: 'SL-3', topic: 'Sai lầm',
      question: 'Cách khắc phục sai lầm “chủ quan, duy ý chí” là:',
      choices: [
        'Thiết kế quan sát độc lập, chấp nhận dữ liệu trái kỳ vọng',
        'Chỉ chọn dữ liệu ủng hộ giả thuyết',
        'Bỏ qua bối cảnh kiểm nghiệm',
        'Tuyệt đối hoá lý thuyết sẵn có'
      ],
      answerIndex: 0,
      explain: 'Cần kiểm soát thiên lệch nhận thức và tôn trọng dữ liệu khách quan.'
    },
    {
      id: 'NG-4', topic: 'Nguồn gốc & bản chất',
      question: 'Yếu tố nào KHÔNG thuộc nguồn gốc xã hội–lịch sử của nhận thức?',
      choices: ['Lao động', 'Ngôn ngữ', 'Giao tiếp cộng đồng', 'Trực giác thần bí'],
      answerIndex: 3,
      explain: 'Nguồn gốc là lao động–ngôn ngữ–giao tiếp; “trực giác thần bí” không phải cơ sở khoa học.'
    },
    {
      id: 'TP-4', topic: 'Thực tiễn',
      question: 'Phát biểu đúng về kiểm nghiệm thực tiễn:',
      choices: [
        'Phải có khả năng lặp lại và mở rộng phạm vi điều kiện',
        'Chỉ cần một lần thử là đủ',
        'Không cần minh bạch phương pháp',
        'Có thể bỏ qua sai số đo đạc'
      ],
      answerIndex: 0,
      explain: 'Kiểm nghiệm cần minh bạch, lặp lại được, đánh giá sai số và mở rộng điều kiện.'
    },
    {
      id: 'KN-4', topic: 'Khái niệm',
      question: 'Sản phẩm cuối của hoạt động nhận thức là gì?',
      choices: ['Tri thức', 'Cảm xúc', 'Nhu cầu', 'Vật chất'],
      answerIndex: 0,
      explain: 'Sản phẩm là tri thức (khái niệm, quy luật, mô hình, công nghệ).'
    },
    {
      id: 'SL-4', topic: 'Sai lầm',
      question: 'Lựa chọn nào giúp tránh giáo điều?',
      choices: [
        'Đặt vấn đề trong bối cảnh lịch sử–cụ thể, cập nhật trước dữ kiện mới',
        'Cố định mô hình dù bối cảnh thay đổi',
        'Loại bỏ mọi phản biện',
        'Ưu tiên uy tín cá nhân hơn dữ liệu'
      ],
      answerIndex: 0,
      explain: 'Phải tôn trọng tính lịch sử–cụ thể và vai trò của thực tiễn, phản biện khoa học.'
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
