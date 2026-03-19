export default function handler(req, res) {
  // 보안을 위해 POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { password } = req.body;

  // process.env.ADMIN_PW는 Vercel 설정에서 가져옵니다.
  // 이 로그는 Vercel 대시보드 로그에만 찍히고 브라우저엔 안 나옵니다.
  console.log("서버에서 검증 중..."); 

  if (password === process.env.ADMIN_PW) {
    res.status(200).json({ success: true, message: "관리자 인증 성공!" });
  } else {
    res.status(401).json({ success: false, message: "비밀번호가 틀렸습니다." });
  }
}