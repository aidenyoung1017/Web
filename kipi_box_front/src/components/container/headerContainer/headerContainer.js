import React, {Component} from 'react';
import './headerContainer.css';

class HeaderContainer extends Component {
    render() {
        return(
            <section>
                <div>
                    <div className="headerTitle">
                        KIPI Box
                    </div>

                    <div className="headerDetail">
                        키피박스는 보안 커뮤니케이션을 제공하는 프라이빗 서버로 키피 메신저앱 채널을 지원합니다. 
                        Box안에 내정보를 안전하게 Keep해 주는 메신저 앱, KipiBox에서 기기연동 한번으로 안전하게 사용하세요.
                    </div>
                </div>
            </section>
        );
    }
}

export default HeaderContainer;