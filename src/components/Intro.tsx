export default function Intro() {
    return (
        <div>
            <div className="w-[75%] mx-50 rounded">

                <div className='w-[75%]'>🤭</div>

                <div className='w-[75%]' style={{ color: '#BABABA' }}>
                    Hola, I'm{' '}
                    <span style={{ color: 'white', fontWeight: '500' }}>Shorya</span>{' '}
                    — developer, designer, and a lil bit of a creator.
                </div>

                <div className='w-[100%]' style={{ color: '#BABABA' }}>
                    I'm currently a{' '}
                    <span style={{ color: 'white', fontWeight: '500' }}>Computer Science</span>{' '}
                    undergrad, a Web Developer @ VIT Chennai,
                    <div className="w-[100%]">
                        a Project Lead @ Longhorn Developers, and building{' '}
                        <span style={{ color: 'white', fontWeight: '500' }}>mymentalhealth.com</span>{' '}
                        all on my own.
                    </div>
                </div>
            </div>

            <div className="flex space-x-10 my-20 mx-54 mb-2" style={{ color: '#BABABA' }}>
                <div>Projects</div>

                <div className="flex items-center space-x-2">
                    <span>Tech Stack</span>
                    <span className="w-1 h-1 rounded-full bg-blue-300 animate-ping"></span>
                </div>
            </div>



            <hr
                className="border-t mx-auto w-[71%] flex justify-center mb-7"
                style={{ color: '#684574' }}
            />
        </div>
    );
}
