document.addEventListener('DOMContentLoaded', () => {
    const stationItems = document.querySelectorAll('.station-item');
    const stationTitle = document.getElementById('stationTitle');
    const stationDesc = document.getElementById('stationDesc');
    const interactiveContent = document.getElementById('interactiveContent');

    // محتويات المحطات التفاعلية الحية (تطبيقات عمليّة بدون أكواد برمجية)
    const stationsData = {
        overview: {
            title: "نظرة عامة وكتابة أول كود",
            desc: "مرحباً بك في منصة المحاكاة الحية. استكشف التطبيقات العملية لأساسيات الجافاسكريبت.",
            content: `
                <div class="welcome-box">
                    <h3>أهلاً بك أيها المبرمج العبقري! ✨</h3>
                    <p>هذه الواجهة مصممة لتطبيق مفاهيم جافاسكريبت برمجياً عبر أدوات تفاعلية حية تظهر للمستخدم مباشرة بدون الحاجة لعرض الكود البرمجي.</p>
                    <button class="primary-btn" id="startJourneyBtn">ابدأ استكشاف المحطات 🚀</button>
                </div>
            `
        },
        variables: {
            title: "المتغيرات وأنواع البيانات",
            desc: "جرب حفظ واستعراض بيانات المستخدم (نص، رقم، قيمة منطقية) في متغيرات النظام.",
            content: `
                <div class="interactive-tool">
                    <h3>📦 محاكي تخزين بيانات المستخدم</h3>
                    <div class="form-group" style="margin: 15px 0; text-align: right; width: 100%;">
                        <label style="display:block; margin-bottom:5px; font-size:13px; color:#94a3b8;">اسم الطالب (String):</label>
                        <input type="text" id="varName" placeholder="أدخل اسمك..." style="width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff;">
                    </div>
                    <div class="form-group" style="margin-bottom: 15px; text-align: right; width: 100%;">
                        <label style="display:block; margin-bottom:5px; font-size:13px; color:#94a3b8;">العمر (Number):</label>
                        <input type="number" id="varAge" placeholder="أدخل عمرك..." style="width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff;">
                    </div>
                    <button class="primary-btn" id="saveVarBtn">حفظ البيانات في المتغيرات 💾</button>
                    <div id="varResult" style="margin-top: 15px; font-weight: bold; color: #38bdf8;"></div>
                </div>
            `
        },
       operators: {
            title: "العوامل الحسابية",
            desc: "قم بإجراء العمليات الحسابية المختلفة (جمع، طرح، ضرب، قسمة) باستخدام العوامل الرياضية.",
            content: `
                <div class="interactive-tool">
                    <h3>⚡ الآلة الحسابية المتطورة</h3>
                    <div style="display: flex; gap: 10px; margin: 15px 0; width: 100%;">
                        <input type="number" id="num1" placeholder="الرقم الأول" style="flex:1; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff;">
                        <select id="operator" style="padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff; cursor:pointer;">
                            <option value="+">(+) جمع</option>
                            <option value="-">(-) طرح</option>
                            <option value="*">(×) ضرب</option>
                            <option value="/">(÷) قسمة</option>
                        </select>
                        <input type="number" id="num2" placeholder="الرقم الثاني" style="flex:1; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff;">
                    </div>
                    <button class="primary-btn" id="calcBtn">احسب النتيجة 🧮</button>
                    <div id="calcResult" style="margin-top: 15px; font-weight: bold; color: #38bdf8;"></div>
                </div>
            `
        },
        conditions: {
            title: "الشروط (قفل الأمان)",
            desc: "جرب إدخال رمز المرور للتحقق من عمل جمل الشروط (If / Else).",
            content: `
                <div class="interactive-tool">
                    <h3>🔐 محاكي قفل الأمان الرقمي</h3>
                    <p style="font-size:12px; color:#94a3b8; margin-bottom:15px;">كلمة المرور الصحيحة هي: 1234</p>
                    <input type="password" id="pinInput" placeholder="أدخل رمز المرور..." style="width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff; margin-bottom:15px;">
                    <button class="primary-btn" id="checkPinBtn">تحقق من القفل 🔓</button>
                    <div id="pinResult" style="margin-top: 15px; font-weight: bold;"></div>
                </div>
            `
        },
        loops: {
            title: "الحلقات التكرارية",
            desc: "قم بتوليد قائمة أرقام تكرارية تلقائياً باستخدام الحلقات (Loops).",
            content: `
                <div class="interactive-tool">
                    <h3>🔄 مولد العد التكراري</h3>
                    <button class="primary-btn" id="runLoopBtn">توليد الأرقام من 1 إلى 5 🚀</button>
                    <div id="loopResult" style="margin-top: 15px; color: #38bdf8; font-weight:bold; display:flex; gap:10px; justify-content:center;"></div>
                </div>
            `
        },
        "numbers-strings": {
            title: "الأعداد النصوص",
            desc: "دمج النصوص وتنسيق الأعداد بطريقة تفاعلية.",
            content: `
                <div class="interactive-tool">
                    <h3>📝 دمج وتنسيق النصوص</h3>
                    <input type="text" id="firstName" placeholder="الاسم الأول..." style="width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff; margin-bottom:10px;">
                    <input type="text" id="lastName" placeholder="اسم العائلة..." style="width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff; margin-bottom:15px;">
                    <button class="primary-btn" id="joinTextBtn">دمج الاسم بالكامل ✍️</button>
                    <div id="textResult" style="margin-top: 15px; font-weight: bold; color: #38bdf8;"></div>
                </div>
            `
        },
        arrays: {
            title: "المصفوفات (سلة التسوق)",
            desc: "إضافة وعرض المنتجات داخل مصفوفة تفاعلية.",
            content: `
                <div class="interactive-tool">
                    <h3>🛒 سلة التسوق الذكية</h3>
                    <div style="display:flex; gap:10px; margin-bottom:15px; width:100%;">
                        <input type="text" id="productInput" placeholder="اسم المنتج..." style="flex:1; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff;">
                        <button class="primary-btn" id="addProductBtn" style="margin-top:0;">إضافة</button>
                    </div>
                    <div id="cartList" style="background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; min-height:50px; color:#cbd5e1; font-size:13px; text-align:right;">السلة فارغة حالياً</div>
                </div>
            `
        },
        functions: {
            title: "الدوال العادية والسهمية",
            desc: "تنفيذ العمليات عبر الدوال البرمجية العادية والسهمية.",
            content: `
                <div class="interactive-tool">
                    <h3>🧮 اختبار الدوال (Functions)</h3>
                    <input type="number" id="funcInput" placeholder="أدخل رقماً..." style="width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(15,23,42,0.5); color:#fff; margin-bottom:15px;">
                    <button class="primary-btn" id="runFuncBtn">تشغيل الدالة السهمية (مضاعفة الرقم) ⚡</button>
                    <div id="funcResult" style="margin-top: 15px; font-weight: bold; color: #38bdf8;"></div>
                </div>
            `
        }
    };

    // التنقل بين المحطات وتحديث الواجهة ديناميكياً
    stationItems.forEach(item => {
        item.addEventListener('click', () => {
            stationItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const target = item.getAttribute('data-target');
            const data = stationsData[target];

            if (data) {
                stationTitle.textContent = data.title;
                stationDesc.textContent = data.desc;
                interactiveContent.innerHTML = data.content;

                // تفعيل الأحداث التفاعلية للأدوات حسب المحطة المفتوحة
                initInteractions(target);
            }
        });
    });

    // دالة لتشغيل تفاعل الأزرار داخل كل محطة
    function initInteractions(target) {
        if (target === 'variables') {
            document.getElementById('saveVarBtn').addEventListener('click', () => {
                const name = document.getElementById('varName').value;
                const age = document.getElementById('varAge').value;
                const res = document.getElementById('varResult');
                if(name && age) {
                    res.textContent = `تم حفظ المتغيرات بنجاح! مرحباً ${name}, عمرك ${age} سنة.`;
                    res.style.color = '#38bdf8';
                } else {
                    res.textContent = 'الرجاء تعبئة الحقول أولاً!';
                    res.style.color = '#ff4757';
                }
            });
      } else if (target === 'operators') {
            document.getElementById('calcBtn').addEventListener('click', () => {
                const n1 = parseFloat(document.getElementById('num1').value);
                const n2 = parseFloat(document.getElementById('num2').value);
                const op = document.getElementById('operator').value;
                const resDiv = document.getElementById('calcResult');

                if (isNaN(n1) || isNaN(n2)) {
                    resDiv.textContent = 'الرجاء إدخال رقمين صحيحين!';
                    resDiv.style.color = '#ff4757';
                    return;
                }

                let result;
                if (op === '+') result = n1 + n2;
                else if (op === '-') result = n1 - n2;
                else if (op === '*') result = n1 * n2;
                else if (op === '/') {
                    if (n2 === 0) {
                        resDiv.textContent = 'خطأ: لا يمكن القسمة على الصفر!';
                        resDiv.style.color = '#ff4757';
                        return;
                    }
                    result = n1 / n2;
                }

                resDiv.textContent = `النتيجة النهائية: ${n1} ${op} ${n2} = ${result}`;
                resDiv.style.color = '#38bdf8';
            });
        } else if (target === 'conditions') {
            document.getElementById('checkPinBtn').addEventListener('click', () => {
                const pin = document.getElementById('pinInput').value;
                const res = document.getElementById('pinResult');
                if (pin === '1234') {
                    res.textContent = '✅ كلمة المرور صحيحة! تم فتح القفل بنجاح.';
                    res.style.color = '#22c55e';
                } else {
                    res.textContent = '❌ كلمة المرور خاطئة! حاول مجدداً.';
                    res.style.color = '#ff4757';
                }
            });
        } else if (target === 'loops') {
            document.getElementById('runLoopBtn').addEventListener('click', () => {
                const res = document.getElementById('loopResult');
                res.innerHTML = '';
                for (let i = 1; i <= 5; i++) {
                    const span = document.createElement('span');
                    span.textContent = `[ ${i} ]`;
                    span.style.padding = '5px 10px';
                    span.style.background = 'rgba(59,130,246,0.2)';
                    span.style.borderRadius = '6px';
                    res.appendChild(span);
                }
            });
        } else if (target === 'numbers-strings') {
            document.getElementById('joinTextBtn').addEventListener('click', () => {
                const f = document.getElementById('firstName').value;
                const l = document.getElementById('lastName').value;
                document.getElementById('textResult').textContent = `الاسم الكامل: ${f} ${l}`;
            });
        } else if (target === 'arrays') {
            let cart = [];
            const addBtn = document.getElementById('addProductBtn');
            const prodInput = document.getElementById('productInput');
            const cartList = document.getElementById('cartList');

            addBtn.addEventListener('click', () => {
                const val = prodInput.value.trim();
                if (val) {
                    cart.push(val);
                    cartList.textContent = `العناصر في المصفوفة: [ ${cart.join(', ')} ]`;
                    prodInput.value = '';
                }
            });
        } else if (target === 'functions') {
            document.getElementById('runFuncBtn').addEventListener('click', () => {
                const val = parseFloat(document.getElementById('funcInput').value) || 0;
                // دالة سهمية (Arrow Function) لمضاعفة الرقم
                const doubleNum = (x) => x * 2;
                document.getElementById('funcResult').textContent = `ناتج الدالة السهمية (مضاعفة الرقم): ${doubleNum(val)}`;
            });
        }
    }

    // زر البداية في الواجهة الافتراضية
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'startJourneyBtn') {
            document.querySelector('[data-target="variables"]').click();
        }
    });
});