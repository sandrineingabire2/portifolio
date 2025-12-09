import { NextResponse } from 'next/server';

let contacts: any[] = [];

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const contact = {
      id: Date.now(),
      name,
      email,
      message,
      created_at: new Date().toISOString()
    };
    
    contacts.push(contact);
    
    console.log('New contact:', contact);

    return NextResponse.json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
