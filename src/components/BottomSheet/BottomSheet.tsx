import React, { useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './BottomSheet.css'; // Import the CSS file

export type BottomSheetProps = {
    children: ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return ReactDOM.createPortal(
        <div className="drawer-container">
            <button className="open-drawer-button" onClick={toggleDrawer}>
                {isOpen ? 'Close' : 'Open'} Drawer
            </button>
            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                <div className="drawer-content">
                    {children}
                    <button onClick={toggleDrawer}>Close</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default BottomSheet;