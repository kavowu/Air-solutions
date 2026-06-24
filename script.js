// ============================================================
// 台灣空調工程解決方案中心 - script.js
// ============================================================

// ---------- Mobile Menu Toggle ----------
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        // Animate hamburger
        mobileMenuBtn.classList.toggle('is-open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileMenuBtn.classList.remove('is-open');
        });
    });
}

// ---------- Smooth Scrolling ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80; // account for sticky nav
            const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
    });
});

// ---------- Navbar Scroll Effect ----------
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ---------- Contact Button Binding ----------
document.querySelectorAll('.contact-btn, .btn-large, #tech-contact-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        showContactModal();
    });
});

// ---------- Contact Modal ----------
function showContactModal() {
    // Prevent duplicate modals
    if (document.querySelector('.modal')) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', '聯絡我們');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>聯絡我們</h2>
                <button class="modal-close" aria-label="關閉">&times;</button>
            </div>
            <form class="contact-form" novalidate>
                <div class="form-group">
                    <label for="contact-name">姓名 *</label>
                    <input type="text" id="contact-name" name="name" required placeholder="請輸入您的姓名">
                </div>
                <div class="form-group">
                    <label for="contact-email">電子郵件 *</label>
                    <input type="email" id="contact-email" name="email" required placeholder="請輸入電子郵件">
                </div>
                <div class="form-group">
                    <label for="contact-phone">電話</label>
                    <input type="tel" id="contact-phone" name="phone" placeholder="(選填)">
                </div>
                <div class="form-group">
                    <label for="contact-company">公司名稱</label>
                    <input type="text" id="contact-company" name="company" placeholder="(選填)">
                </div>
                <div class="form-group">
                    <label for="contact-message">訊息 *</label>
                    <textarea id="contact-message" name="message" rows="4" required placeholder="請描述您的需求或問題..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:0.5rem;justify-content:center;">送出</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Inject modal styles
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .modal {
            display: flex;
            position: fixed;
            z-index: 9999;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.55);
            align-items: center;
            justify-content: center;
            animation: modalFadeIn 0.2s ease;
            padding: 1rem;
        }

        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-content {
            background-color: white;
            padding: 2.25rem;
            border-radius: 14px;
            width: 100%;
            max-width: 520px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
            animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.75rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #1e3a5f;
        }

        .modal-header h2 {
            color: #1e3a5f;
            font-size: 1.4rem;
            margin: 0;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 1.75rem;
            cursor: pointer;
            color: #94a3b8;
            line-height: 1;
            transition: color 0.2s ease;
            padding: 0 0.25rem;
        }

        .modal-close:hover { color: #1e3a5f; }

        .form-group {
            margin-bottom: 1.25rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.4rem;
            color: #334155;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.7rem 0.875rem;
            border: 1.5px solid #cbd5e1;
            border-radius: 6px;
            font-family: inherit;
            font-size: 0.95rem;
            color: #0f172a;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            background: #f8fafc;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder { color: #94a3b8; }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #1e3a5f;
            box-shadow: 0 0 0 3px rgba(30, 58, 95, 0.1);
            background: white;
        }

        .form-group textarea { resize: vertical; }

        .success-message {
            text-align: center;
            padding: 2rem 1rem;
        }

        .success-icon {
            font-size: 3.5rem;
            color: #16a34a;
            margin-bottom: 1rem;
        }

        .success-message h3 {
            color: #0f172a;
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
        }

        .success-message p {
            color: #475569;
            margin-bottom: 1.75rem;
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);

    // Close handlers
    function closeModal() {
        modal.remove();
        style.remove();
        document.body.style.overflow = '';
    }

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });

    // Form submit
    modal.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const form = modal.querySelector('.contact-form');
        form.innerHTML = `
            <div class="success-message">
                <div class="success-icon">✓</div>
                <h3>感謝您的訊息！</h3>
                <p>我們已收到您的聯絡資訊，工程顧問將在 24 小時內回覆您。</p>
                <button class="btn btn-primary" style="margin:0 auto;display:block;" onclick="document.querySelector('.modal').remove();document.getElementById('modal-styles').remove();document.body.style.overflow='';">關閉</button>
            </div>
        `;
    });
}

// ---------- Page Load ----------
document.addEventListener('DOMContentLoaded', () => {
    console.log('台灣空調工程解決方案中心 - 頁面已加載');
});
