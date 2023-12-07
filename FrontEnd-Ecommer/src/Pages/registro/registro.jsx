import { NavLink } from 'react-router-dom';
import logo from './Logo.png'
import izquierda from './Imagen_Izquierda.png'
import derecha from './imagen_derecha.png'
import imagen1 from './rectangle-10840.png' 
import imagen2 from './paste-image0.png'
import imagen3 from './tech-solutions-20.png'
import './registro.css'


export default function Registro() {

  return (
      <>
        <div className="sign-up-popup-desktop">
          <img className="rectangle-1084" src={imagen1}/>
            <div className="left">
              <div className="image-placeholder">
                <img className="paste-image" src={imagen2}/>
                  <div className="logo-negativo-2">
                    <img className="tech-solutions-2" src={imagen3}/>
                      <div className="logo-name">
                        <div className="hardtech">
                          <span>
                            <span className="hardtech-span">HARD</span>
                            <span className="hardtech-span2">TECH</span>
                          </span>
                        </div>
                        <div class="al-alcance-de-un-click">Al alcance de un click</div>
                      </div>
                  </div>
              </div> 
            </div>
     {/* <div class="sign-up">
        <div class="title">
          <div class="header">
            <div class="content">
              <div class="registrate">Registrate</div>
            </div>
          </div>
        </div>
        <div class="form-rating">
          <div class="form">
            <div class="form-input">
              <div class="content2">
                <div class="content3">
                  <div class="nombre">Nombre</div>
                </div>
              </div>
            </div>
            <div class="form-input">
              <div class="content2">
                <div class="content3">
                  <div class="username">Username</div>
                </div>
              </div>
            </div>
            <div class="form-input">
              <div class="content2">
                <div class="content3">
                  <div class="email">Email</div>
                </div>
              </div>
            </div>
            <div class="form-input">
              <div class="content2">
                <div class="content3">
                  <div class="password">Password</div>
                  <svg class="huge-icon-interface-outline-eye" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z" stroke="#6C7275" stroke-width="1.5"></path>
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#6C7275" stroke-width="1.5"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="different-address">
              <div class="ratio-button"></div>
            </div>
          </div>
        </div>
        <div class="button">
          <div class="crear">Crear</div>
        </div>
      </div>
      <div class="button2">
        <svg class="social-icons-facebook-original" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_294_3772)">
            <path d="M28 14C28 6.26808 21.7319 0 14 0C6.26808 0 0 6.26808 0 14C0 20.5654 4.52032 26.0747 10.6182 27.5878V18.2784H7.73136V14H10.6182V12.1565C10.6182 7.39144 12.7747 5.1828 17.453 5.1828C18.34 5.1828 19.8705 5.35696 20.4966 5.53056V9.40856C20.1662 9.37384 19.5922 9.35648 18.8793 9.35648C16.5838 9.35648 15.6968 10.2262 15.6968 12.4869V14H20.2698L19.4841 18.2784H15.6968V27.8975C22.629 27.0603 28.0006 21.1579 28.0006 14H28Z" fill="#0866FF"></path>
            <path d="M19.4837 18.2783L20.2694 13.9999H15.6964V12.4868C15.6964 10.2261 16.5834 9.35642 18.8789 9.35642C19.5918 9.35642 20.1658 9.37378 20.4962 9.4085V5.5305C19.8701 5.35634 18.3396 5.18274 17.4526 5.18274C12.7743 5.18274 10.6178 7.39138 10.6178 12.1564V13.9999H7.73096V18.2783H10.6178V27.5878C11.7008 27.8566 12.8337 27.9999 13.9996 27.9999C14.5736 27.9999 15.1398 27.9647 15.6958 27.8975V18.2783H19.4831H19.4837Z" fill="white"></path>
          </g>
          <defs>
            <clipPath id="clip0_294_3772">
              <rect width="28" height="28" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        <div class="inicia-sesi-n">Inicia Sesión</div>
      </div>
      <div class="button3">
        <div class="social-icons-google-original">
          <svg class="vector2" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4995 11.4545V16.8763H22.034C21.7032 18.6199 20.7103 20.0963 19.2213 21.0891L23.7649 24.6145C26.4122 22.171 27.9394 18.5819 27.9394 14.3182C27.9394 13.3255 27.8504 12.3709 27.6849 11.4546L14.4995 11.4545Z" fill="#4285F4"></path>
            <path d="M6.65355 16.6647L5.6288 17.4491L2.00146 20.2745C4.3051 24.8436 9.02656 28 14.4992 28C18.2792 28 21.4482 26.7527 23.7646 24.6146L19.221 21.0891C17.9737 21.9291 16.3828 22.4382 14.4992 22.4382C10.8593 22.4382 7.76663 19.9819 6.65928 16.6728L6.65355 16.6647Z" fill="#34A853"></path>
            <path d="M2.00171 7.72546C1.04722 9.60902 0.5 11.7345 0.5 13.9999C0.5 16.2653 1.04722 18.3908 2.00171 20.2744C2.00171 20.287 6.65997 16.6598 6.65997 16.6598C6.37997 15.8198 6.21447 14.929 6.21447 13.9998C6.21447 13.0706 6.37997 12.1797 6.65997 11.3397L2.00171 7.72546Z" fill="#FBBC05"></path>
            <path d="M14.4995 5.57454C16.5614 5.57454 18.3941 6.28725 19.8577 7.66181L23.8668 3.65277C21.4358 1.38736 18.2796 0 14.4995 0C9.02685 0 4.3051 3.14363 2.00146 7.72546L6.65958 11.34C7.76679 8.03089 10.8596 5.57454 14.4995 5.57454Z" fill="#EA4335"></path>
          </svg>
        </div>
        <div class="inicia-sesi-n">Inicia Sesión</div>
      </div> */}
    </div>






      </>
  )
}