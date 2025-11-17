import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Crear HTML del email directamente
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #c4671f; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .info { background: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .label { font-weight: bold; color: #c4671f; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #c4671f; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Nuevo mensaje de tu portafolio</h1>
            </div>
            <div class="content">
              <p>Has recibido un nuevo mensaje desde tu sitio web:</p>

              <div class="info">
                <p><span class="label">Nombre:</span> ${name}</p>
                <p><span class="label">Email:</span> ${email}</p>
              </div>

              <div class="message-box">
                <h3 style="margin-top: 0; color: #c4671f;">Mensaje:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>

              <p style="color: #666; font-size: 14px;">
                Puedes responder directamente a: <a href="mailto:${email}">${email}</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email usando Resend
    // Para testing usa: 'onboarding@resend.dev'
    // Para producción usa: 'Portfolio <noreply@tudominio.com>'
    const { data, error } = await resend.emails.send({
      from: 'Artista <onboarding@resend.dev>',
      to: ['jeisond3@gmail.com'],
      subject: `Nuevo mensaje de ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Error from Resend:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in POST /api/send:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
