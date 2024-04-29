import Header from "../components/Header";
import {
  AboutTitle,
  AboutTitleDiv,
  AboutTitleIcon,
  ParagraphAbout,
  DivWrapper,
  Span,
  ParagraphWrapper,
} from "../components/StyledComponent";

const AboutCompany = () => {
  return (
    <>
      <Header margin={"0"} />
      <DivWrapper>
        <AboutTitleDiv>
          <AboutTitleIcon />
          <AboutTitle>კომპანიის შესახებ</AboutTitle>
        </AboutTitleDiv>
        <ParagraphWrapper>
          <ParagraphAbout>
            <Span>არქ-ფოინთი</Span> წარმოადგენს არქიტექტურულ კომპანიას, რომელიც
            წარმატებით საქმიანობს საქართველოში  2019 წლიდან არქიტექტურის,
            ქალაქგეგმარების, ინტერიერის დიზაინის მიმართულებით.
            არქიტექტურული კომპანია „არქ ფოინთი“ ყოველთვის ცდილობს გამოიყენოს
            მსოფლიო არქიტექტურისა და დიზაინის უახლესი მიღწევები თავის
            პროექტებში. კონკრეტული ადამიანებისთვის დიზაინით, ჩვენ ვახორციელებთ
            მათ იდეალურ ხედვას, მათ ოცნებებსა და სურვილებს.
          </ParagraphAbout>
          <ParagraphAbout>
            ჩვენი კომპანიის პროექტები არის შემოქმედებითი გაერთიანების შედეგი
            არქიტექტორებსა და მომხარებლებს შორის, ერთობლივი რეფლექსიის შედეგი.
            და ამიტომ, ჩვენს ნამუშევრებს შორის ვერ ნახავთ ორ იდენტურ შენობას ან
            ინტერიერს. ადამიანებისთვის სხვადასხვა პროექტების შექმნით მათ
            ცხოვრებას უკეთესობისკენ ვცვლით.
          </ParagraphAbout>
          <ParagraphAbout>
            აღნიშნული ფაქტორებიდან გამომდინარე, „არქ ფოინთი“-ს აქვს ამბიცია,
            იყოს პრემიუმ ხარისხის არქიტექტურული სერვისების მიმწოდებელი წამყვანი
            კომპანია ბაზარზე; განახორციელოს მნიშვნელობი პროექტები როგორც
            საქართველოში, ისე მის საზღვრებს გარეთ.
          </ParagraphAbout>
          <ParagraphAbout>
            <Span>არქ-ფოინთი</Span> - იცხოვრე შენი ცხოვრებით!
          </ParagraphAbout>
        </ParagraphWrapper>

        <AboutTitleDiv>
          <AboutTitleIcon />
          <AboutTitle>სერვისები</AboutTitle>
        </AboutTitleDiv>
        <ParagraphWrapper>
          <ParagraphAbout>--არქიტექტურა და პროექტირება--</ParagraphAbout>
          <ParagraphAbout> ინდივიდუალური სახლები საზოგადოებრივი</ParagraphAbout>
          <ParagraphAbout>
            ნაგებობები მრავალსართულიანი შენობები კომერციული ფართები სკვერები და
            ბაღები
          </ParagraphAbout>
          <ParagraphAbout>--ინტერიერის დიზაინი--</ParagraphAbout>
          <ParagraphAbout>
            სივრცის გეგმარება 3D დიზაინის შექმნა მუშა ნახაზები შექმნა მასალების
            შერჩევა სამუშაოების ზედამხედველობა
          </ParagraphAbout>
        </ParagraphWrapper>
        <AboutTitleDiv>
          <AboutTitleIcon />
          <AboutTitle>ფასები არქ ფოინთი</AboutTitle>
        </AboutTitleDiv>
        <ParagraphWrapper>
          <ParagraphAbout>60 კვ - 1000 ლარი სატრანსპორტოთი.</ParagraphAbout>
          <ParagraphAbout>80 კვ - 13$ (32 ლარი + 800 ლარი )</ParagraphAbout>
          <ParagraphAbout>100 კვ - 11$ ( 28 ლარი + 800 ლარი)</ParagraphAbout>
          <ParagraphAbout>150 კვ - 8$ ( 21 ლარი + 800 ლარი)</ParagraphAbout>
          <ParagraphAbout>200 კვ - 7$ ( 19 ლარი + 800 ლარი )</ParagraphAbout>
        </ParagraphWrapper>
        <AboutTitleDiv>
          <AboutTitleIcon />
          <AboutTitle>კონტაქტი</AboutTitle>
        </AboutTitleDiv>
        <ParagraphWrapper>
          <ParagraphAbout>თბილისი, სამტრედიის ქუჩა #3 ა</ParagraphAbout>
          <ParagraphAbout>სამუშო საათები 10:00 — 19:00</ParagraphAbout>{" "}
          <ParagraphAbout>დასვენების დღეები: შაბათი, კვირა</ParagraphAbout>
          <ParagraphAbout>☎ 592 005 297</ParagraphAbout>
          <ParagraphAbout>archpoint74@gmail.com</ParagraphAbout>
          <ParagraphAbout>
            Facebook : https://www.facebook.com/archpointofficial
          </ParagraphAbout>
          <ParagraphAbout>
            Instagram :https://www.instagram.com/archpointi/
          </ParagraphAbout>
        </ParagraphWrapper>
      </DivWrapper>
    </>
  );
};

export default AboutCompany;
