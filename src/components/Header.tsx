import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

interface HeaderProps {
    email: string;
    githubRepo: string;
}

const Header: React.FC<HeaderProps> = ({ email, githubRepo }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Image Ratio Padder</h1>

            {/* Icons for Email and GitHub */}
            <div className="flex space-x-4">
                <a
                    href={`mailto:${email}`}
                    aria-label="Email"
                    title="이메일 보내기"
                >
                    <IoIosMail className="w-8 h-8 text-gray-600 hover:text-gray-900" />
                </a>
                <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="깃허브 저장소 방문하기"
                >
                    <FaGithub className="w-8 h-8 text-gray-600 hover:text-gray-900" />
                </a>
            </div>
        </div>
    );
};

export default Header;
