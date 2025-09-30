'use client';

import { useEffect } from 'react';

export default function DevToolsProtection() {
  useEffect(() => {
    // Disable right click context menu
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    const disableDevTools = (e: KeyboardEvent): boolean => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+A (Select All)
      if (e.ctrlKey && e.keyCode === 65) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+P (Print)
      if (e.ctrlKey && e.keyCode === 80) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+C (Copy)
      if (e.ctrlKey && e.keyCode === 67) {
        e.preventDefault();
        return false;
      }
      
      return true;
    };

    // Disable text selection
    const disableTextSelection = () => {
      const bodyStyle = document.body.style as any;
      bodyStyle.userSelect = 'none';
      bodyStyle.webkitUserSelect = 'none';
      bodyStyle.mozUserSelect = 'none';
      bodyStyle.msUserSelect = 'none';
    };

    // Detect DevTools
    const detectDevTools = () => {
      const threshold = 160;
      
      const detect = () => {
        if (
          window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold
        ) {
          // DevTools detected - redirect or show warning
          document.body.innerHTML = `
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              font-family: Arial, sans-serif;
              text-align: center;
              padding: 20px;
            ">
              <div>
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">🚫 Truy cập bị từ chối</h1>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                  Developer Tools không được phép sử dụng trên trang web này
                </p>
                <p style="font-size: 1rem; opacity: 0.8;">
                  Vui lòng đóng Developer Tools và tải lại trang
                </p>
                <button 
                  onclick="window.location.reload()" 
                  style="
                    margin-top: 2rem;
                    padding: 12px 24px;
                    background: rgba(255,255,255,0.2);
                    border: 2px solid white;
                    color: white;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                  "
                  onmouseover="this.style.background='rgba(255,255,255,0.3)'"
                  onmouseout="this.style.background='rgba(255,255,255,0.2)'"
                >
                  Tải lại trang
                </button>
              </div>
            </div>
          `;
        }
      };

      setInterval(detect, 500);
    };

    // Clear console periodically
    const clearConsole = () => {
      setInterval(() => {
        console.clear();
        console.log('%c🚫 DỪNG LẠI!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log('%cĐây là tính năng dành cho nhà phát triển trên trình duyệt. Nếu ai đó bảo bạn sao chép và dán nội dung nào đó vào đây để "hack" tài khoản của ai đó hoặc bật tính năng ẩn, đó là lừa đảo và sẽ cấp cho họ quyền truy cập vào tài khoản của bạn.', 'color: red; font-size: 16px;');
      }, 1000);
    };

    // Disable drag and drop
    const disableDragDrop = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableDevTools);
    document.addEventListener('dragstart', disableDragDrop);
    document.addEventListener('drop', disableDragDrop);
    
    // Apply text selection disable
    disableTextSelection();
    
    // Start detection and console clearing
    detectDevTools();
    clearConsole();

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableDevTools);
      document.removeEventListener('dragstart', disableDragDrop);
      document.removeEventListener('drop', disableDragDrop);
      
      // Re-enable text selection
      const bodyStyle = document.body.style as any;
      bodyStyle.userSelect = '';
      bodyStyle.webkitUserSelect = '';
      bodyStyle.mozUserSelect = '';
      bodyStyle.msUserSelect = '';
    };
  }, []);

  return null; // Component không render gì cả
}