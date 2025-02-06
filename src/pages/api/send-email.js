import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { companyname, username, address, contact, email, inquiry } = req.body;

  // 配置邮件发送
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // 你的Gmail
      pass: process.env.SMTP_PASS, // 你的Gmail应用专用密码
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // 发送给客户
    subject: 'お問い合わせ確認',
    html: `
      <h2>${username} 様</h2>
      <h3>この度は、ホームページよりお問い合わせいただき誠にありがとうございます。</h3>
      <h3>トランス・オーシャン・ジャパン株式会社と申します。</h3><br>
      <h2>下記の内容でお問合せを受け付けました。</h2>
      <h3>■ 会社名: ${companyname}</h3>
      <h3>■ 名前: ${username}</h3>
      <h3>■ 住所: ${address}</h3>
      <h3>■ 電話番号: ${contact}</h3>
      <h3>■ メールアドレス: ${email}</h3>
      <h3>■ 相談内容: ${inquiry}</h3>
      <h3>内容を確認後、担当者よりご連絡をさせていただきますので、何卒宜しくお願いいたします。</h3>
      <hr>
      <h3>トランス・オーシャン・ジャパン株式会社</h3>
      <h3>取締役 呉　良棟（ご りょうとう）</h3>
      <h3>〒550-0014 大阪市西区江戸堀2丁目1-1 江戸堀センタービル18階</h3>
      <h3>TEL: 06-6568-9706 / FAX: 06-6568-9707</h3>
      <h3>携帯 : 090-9871-7240(優先)</h3>
      <h3>E-MAIL: wu.liangdong@toj.jpn.com</h3>
      <h3>URL : https://www.toj.jpn.com</h3>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'メールが送信されました！', info });
  } catch (error) {
    return res.status(500).json({ message: 'メールの送信に失敗しました', error });
  }
}
