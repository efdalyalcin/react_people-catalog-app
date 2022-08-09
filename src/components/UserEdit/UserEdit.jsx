import { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import cn from 'classnames';
import './UserEdit.scss';

export const UserEdit = ({
  open,
  closeModal,
  updateUser,
  user,
}) => {
  const [newName, setNewName] = useState(user.name);
  const [newMail, setNewMail] = useState(user.email);
  const [newPhone, setNewPhone] = useState(user.phone);
  const [newWebsite, setNewWebsite] = useState(user.website);

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isMailEmpty, setIsMailEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isWebsiteEmpty, setIsWebsiteEmpty] = useState(false);

  const menuRef = useRef();

  useEffect(
    () => {
      let handler = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeModal();
        }
      }

      document.addEventListener('mousedown', handler);
    }
  );

  useEffect(
    () => {
      if (!newName) {
        setIsNameEmpty(true);
      } else {
        setIsNameEmpty(false);
      }

      if (!newMail) {
        setIsMailEmpty(true);
      } else {
        setIsMailEmpty(false);
      }

      if (!newPhone) {
        setIsPhoneEmpty(true);
      } else {
        setIsPhoneEmpty(false);
      }

      if (!newWebsite) {
        setIsWebsiteEmpty(true);
      } else {
        setIsWebsiteEmpty(false);
      }
    },
    [newName, newMail, newPhone, newWebsite],
  );

  const handleUpdateUser = () => {
    const newUser = {
      ...user,
      name: newName,
      email: newMail,
      phone: newPhone,
      website: newWebsite,
    };

    if (newMail && newName && newPhone && newWebsite) {
      updateUser(user.id, newUser);
      closeModal();
    }
  };

  if (!open) {
    return null;
  };

  return ReactDom.createPortal(
    <div>
      <div className="ant-modal-mask"></div>
      <div 
        tabIndex="-1" 
        className="ant-modal-wrap"
        role="dialog"
        aria-labelledby="rcDialogTitle0"
      >
        <div
          role="document"
          className="ant-modal"
          style={{ width: "520px", transformOrigin: "434px 296px"}}
          ref={menuRef}
        >
          <div className="ant-modal-content">
            <button 
              aria-label="Close"
              className="ant-modal-close"
              onClick={closeModal}
            >
              <span className="ant-modal-close-x">
                <i aria-label="icon: close" className="anticon anticon-close ant-modal-close-icon">
                  <svg 
                    viewBox="64 64 896 896"
                    ata-icon="close"
                    width="1em"
                    height="1em" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                  </svg>
                </i>
              </span>
            </button>

            <div className="ant-modal-header">
              <div className="ant-modal-title" id="rcDialogTitle0">Basic Modal</div>
            </div>

            <div className="ant-modal-body">
              <form className="ant-form ant-form-horizontal">
                <div className="ant-row ant-form-item">
                  <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                    <label htmlFor="name" className="ant-form-item-required" title="Name">Name</label>
                  </div>
                <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                  <div className="ant-form-item-control has-error-parent">
                    <span className="ant-form-item-children">
                      <input 
                        type="text"
                        id="name"
                        data-__meta="[object Object]"
                        data-__field="[object Object]"
                        className={cn("ant-input", {'input-error': isNameEmpty})}
                        value={newName}
                        onChange={(event) => setNewName(event.target.value)}
                      />
                    </span>
                    <div 
                      className={cn("ant-form-explain",
                        {'has-error': isNameEmpty, 'has-success': !isNameEmpty})}
                    >
                      This field is required
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                  <label htmlFor="email" className="ant-form-item-required" title="Email">Email</label>
                </div>
                <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                  <div className="ant-form-item-control has-error-parent">
                    <span className="ant-form-item-children">
                      <input 
                        type="email"
                        id="email"
                        data-__meta="[object Object]"
                        data-__field="[object Object]"
                        className={cn("ant-input", {'input-error': isMailEmpty})}
                        value={newMail}
                        onChange={(event) => setNewMail(event.target.value)}
                        required
                      />
                    </span>
                    <div 
                      className={cn("ant-form-explain",
                        {'has-error': isMailEmpty, 'has-success': !isMailEmpty})}
                    >
                      This field is required
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                  <label htmlFor="phone" className="ant-form-item-required" title="Phone">Phone</label>
                </div>
                  <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                    <div className="ant-form-item-control has-error-parent">
                      <span className="ant-form-item-children">
                        <input 
                          type="text" 
                          id="phone" 
                          data-__meta="[object Object]"
                          data-__field="[object Object]"
                          className={cn("ant-input", {'input-error': isPhoneEmpty})}
                          value={newPhone}
                          onChange={(event) => setNewPhone(event.target.value)}
                          required
                        />
                      </span>
                      <div 
                        className={cn("ant-form-explain",
                          {'has-error': isPhoneEmpty, 'has-success': !isPhoneEmpty})}
                      >
                        This field is required
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ant-row ant-form-item">
                  <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                    <label htmlFor="website" className="ant-form-item-required" title="Website">Website</label>
                  </div>
                  <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                    <div className="ant-form-item-control has-error-parent">
                      <span className="ant-form-item-children">
                        <input 
                          type="text"
                          id="website"
                          data-__meta="[object Object]"
                          data-__field="[object Object]"
                          className={cn("ant-input", {'input-error': isWebsiteEmpty})}
                          value={newWebsite}
                          onChange={(event) => setNewWebsite(event.target.value)}
                          required
                        />
                      </span>
                      <div 
                      className={cn("ant-form-explain",
                        {'has-error': isWebsiteEmpty, 'has-success': !isWebsiteEmpty})}
                    >
                      This field is required
                    </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="ant-modal-footer">
              <div>
                <button 
                  type="button"
                  className="ant-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  className="ant-btn ant-btn-primary"
                  onClick={handleUpdateUser}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};
