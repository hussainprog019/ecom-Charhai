import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";


  
export async function POST(request: NextRequest) {
    const client = await db.connect();
     const req=await request.json();
  try {
    if (req.name || req.owner){
        client.sql`INSERT INTO shoes (Name, Owner) VALUES (${req.name}, ${req.owner})`;

    }
    
  } catch (error) {
    return NextResponse.json({ error }, {
        status: 500,
      });
  }

  const shoes = await client.sql`SELECT * FROM shoes;`;
  return NextResponse.json({ shoes });
  }