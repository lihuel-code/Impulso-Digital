import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { action, timestamp, userAgent } = await request.json();

    // Reemplaza esta URL con la URL de la aplicación web de tu Google Apps Script
    const scriptUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

    if (!scriptUrl) {
      console.warn("GOOGLE_SCRIPT_WEBHOOK_URL no está configurada.");
      return NextResponse.json({ success: true, warning: 'Webhook no configurado' });
    }

    // Enviar datos al Google Sheet mediante el Webhook de Google Apps Script
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action, timestamp, userAgent }),
    });

    if (!response.ok) {
      throw new Error('Error al guardar en Google Sheets');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking WhatsApp click:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
